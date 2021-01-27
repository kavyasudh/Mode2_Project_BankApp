import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Bankaccount } from '../bankaccount';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  

  
  bankaccount:Bankaccount = new Bankaccount();
  
  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit() : void {
  }
  saveAccount(){
    this.accountService.createAccount(this.bankaccount).subscribe( data =>{
      console.log(data);
      this.goToAccountList();
    },
    error => console.log(error));
  }

  goToAccountList(){
    this.router.navigate(['/accounts']);
  }
  
  onSubmit(){
    console.log(this.bankaccount);
    this.saveAccount();
  }
}