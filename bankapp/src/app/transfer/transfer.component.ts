import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Transfer } from '../transfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transfer: Transfer= new Transfer();
  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
    
   this.accountService.transfer(this.transfer).subscribe(data=>{
    this.transfer=data;
    }, error=>console.log(error))
  }

  onSubmit(){
    this.accountService.transfer(this.transfer)
    .subscribe(data=> {
        this.goToAccountList();
    }, error=> console.log(error))
  }
  goToAccountList(){
    this.router.navigate(['/accounts']);
  }
}