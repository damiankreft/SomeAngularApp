import { Injectable } from '@angular/core';
import { Account } from '../../models/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountDto } from 'src/app/Dto/account-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsUri: string;
      
  constructor(private http: HttpClient) {
    this.accountsUri = environment.apiHost + "accounts";
  }

  getAccount(email: string): Observable<Account> {
    return this.http.get<Account>(this.accountsUri + email);
  }

  getAccounts(): Observable<AccountDto[]> {
    return this.http.get<AccountDto[]>(this.accountsUri);
  }
}
