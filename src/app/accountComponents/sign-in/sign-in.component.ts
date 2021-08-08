import { Component, OnInit } from '@angular/core';
import { Account } from '../../account';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class AccountSignIn implements OnInit {
  public account: Account = new Account();
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccount("test1@example.com")
  }

  getAccount(email: string): void {
    this.accountService.getAccount(email).subscribe(res => this.account = res);
  }
}
