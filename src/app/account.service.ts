import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  getAccount(email: string): Account { 
    return { 
      "email": "account1@example.com",
      "password": "j3@c8sj#@nf82nx%39rn&J7wnc"
    } as Account }
}
