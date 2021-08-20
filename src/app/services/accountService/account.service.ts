import { Injectable } from '@angular/core';
import { Account } from '../../models/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // TODO: Load AccountService uri from a config file.
  private accountUrl = 'http://localhost:5000/accounts/';
  constructor(private http: HttpClient) {
  }

  getAccount(email: string): Observable<Account> {
    const accountUri = this.accountUrl + email;
    // return this.http.get<Account>(accountUri)
    return this.http.get<Account>(this.accountUrl + 'test1@example.com');
  }
}
