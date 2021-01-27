import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Bankaccount } from '../bankaccount';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  id: number
  account: Bankaccount=new Bankaccount();

  constructor(private route: ActivatedRoute,
     private accountService: AccountService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.account = new Bankaccount();
    this.accountService.getAccountById(this.id).subscribe( data => {
      this.account = data;
    });
  }

}
