import { Injectable } from '@angular/core';
import { Account } from '../../models/account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountDto } from 'src/app/Dto/account-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsUri = 'http://localhost:5000/accounts/';

  // Remove line below - move it somewhere else or utilize a better approach.
  private headers: HttpHeaders;
      
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().append("Control-Allow-Origin", "*");
  }

  getAccount(email: string): Observable<Account> {
    return this.http.get<Account>(this.accountsUri + email);
  }

  getAccounts(): Observable<AccountDto[]> {
    return this.http.get<AccountDto[]>(this.accountsUri);
  }
}
