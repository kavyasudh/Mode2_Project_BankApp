import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bankaccount } from './bankaccount';
import { Deposit } from './deposit';
import { Transfer } from './transfer';
import { Withdraw } from './withdraw';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURL="http://localhost:8081/bankapp/account";
  constructor(private httpClient: HttpClient) { }

  getAccountsList(): Observable<Bankaccount[]>{
    return this.httpClient.get<Bankaccount[]>(`${this.baseURL}`);
  }

  createAccount(account: Bankaccount): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, account);
  }

  updateAccount(id: number, account: Bankaccount): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, account);
  }

  getAccountById(id: number): Observable<Bankaccount>{
    return this.httpClient.get<Bankaccount>(`${this.baseURL}/${id}`);
  }
  deleteAccount(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  deposit(deposit: Deposit): Observable<any>{
    return this.httpClient.post(`http://localhost:8081/account/deposit`, deposit);
  }
  withdraw(withdraw: Withdraw): Observable<Object>{
    return this.httpClient.post(`http://localhost:8081/account/withdraw`, withdraw);
  }
  transfer(transfer: Transfer): Observable<any>{
    return this.httpClient.post(`http://localhost:8081/account/transfer`, transfer);
  }
  
}
