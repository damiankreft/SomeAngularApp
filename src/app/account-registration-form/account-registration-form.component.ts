import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-registration-form',
  templateUrl: './account-registration-form.component.html'
  // styleUrls: ['./account-registration-form.component.scss']
})
export class AccountRegistrationFormComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  city = new FormControl('');
  address = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  updateName() {
    this.firstName.setValue('Nancy (just like that framework)');
  }

}
