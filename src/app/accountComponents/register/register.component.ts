import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class AccountRegisterComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  city = new FormControl('');
  address = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
}
