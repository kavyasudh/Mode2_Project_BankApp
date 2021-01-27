import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Withdraw } from '../withdraw';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  withdraw: Withdraw = new Withdraw();
  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
    
   this.accountService.deposit(this.withdraw).subscribe(data=>{
    this.withdraw=data;
    }, error=>console.log(error))
  }

  onSubmit(){
    this.accountService.withdraw(this.withdraw)
    .subscribe(data=> {
        this.goToAccountList();
    }, error=> console.log(error))
  }
  goToAccountList(){
    this.router.navigate(['/accounts']);
  }
}
