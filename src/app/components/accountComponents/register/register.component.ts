import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class AccountRegisterComponent implements OnInit {
  email = new FormControl('');
  username = new FormControl('');
  password = new FormControl('');
  repeatedPassword = new FormControl('');
  role  = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
}
