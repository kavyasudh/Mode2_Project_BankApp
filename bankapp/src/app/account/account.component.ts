import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Bankaccount } from '../bankaccount';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: Bankaccount[];

  constructor(private accountService: AccountService,private  router: Router) { }

  ngOnInit() {
    this.getAccounts();
  }
  private getAccounts(){
    this.accountService.getAccountsList().subscribe(data=>{
	this.accounts=data;
    });
  }

  updateAccount(id: number){
    console.log(`-----------`)
    this.router.navigate(['update-account', id]);
  }
  deleteAccount(id: number){
    this.accountService.deleteAccount(id).subscribe(data=>{
      this.getAccounts();
      console.log(data);
    })
  }

 
  accountDetails(id: number){
    this.router.navigate(['account-details', id]);
  }
}
  // constructor() { }
  // ngOnInit() {
  //   this.accounts=[
  //     {
  //       "id": 1,
  //       "name": "kavya",
  //       "balance": 5000,
  //       "address": "vskp",
  //       "phone": "83542786946",
  //       "email": "k@k.com",
  //       "accountType": "SAVINGS"
  //   },
  //   {
  //       "id": 2,
  //       "name": "sudha",
  //       "balance": 3900,
  //       "address": "rgda",
  //       "phone": "6543890567",
  //       "email": "k@s.com",
  //       "accountType": "SAVINGS"
  //   },
  //   {
  //       "id": 3,
  //       "name": "gathvik",
  //       "balance": 6100,
  //       "address": "sklm",
  //       "phone": "8654367890",
  //       "email": "g@r.com",
  //       "accountType": "SAVINGS"
  //   }
  //   ];
  // }




