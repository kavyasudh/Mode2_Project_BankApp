import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Deposit } from '../deposit';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  deposit: Deposit= new Deposit();
  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
    
   this.accountService.deposit(this.deposit).subscribe(data=>{
    this.deposit=data;
    }, error=>console.log(error))
  }

  onSubmit(){
    this.accountService.deposit(this.deposit)
    .subscribe(data=> {
        this.goToAccountList();
    }, error=> console.log(error))
  }
  goToAccountList(){
    this.router.navigate(['/accounts']);
  }
}
