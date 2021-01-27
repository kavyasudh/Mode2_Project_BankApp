import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Bankaccount } from '../bankaccount';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  id: number;
  account: Bankaccount = new Bankaccount();
  constructor(private accountService: AccountService,private route: ActivatedRoute,private router: Router) { }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
   this.accountService.getAccountById(this.id).subscribe(data=>{
    this.account=data;
    }, error=>console.log(error))
  }
  onSubmit(){
    this.accountService.updateAccount(this.id, this.account)
    .subscribe(data=> {
        this.goToAccountList();
    }, error=> console.log(error))
  }
  goToAccountList(){
    this.router.navigate(['/accounts']);
  }

}
