import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {
  account: Account = { email: "", password: "" };
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccount("account1@example.com");
  }

  getAccount(email: string): void {
    this.account = this.accountService.getAccount(email);
  }
}
