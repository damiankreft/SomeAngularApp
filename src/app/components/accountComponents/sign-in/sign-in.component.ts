import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { JwtToken } from 'src/app/models/jwt-token';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class AccountSignInComponent implements OnInit {
  public loginForm: FormGroup;

  // email = new FormControl();
  // password = new FormControl();
  public jwtToken: JwtToken = new JwtToken();
  constructor(private loginService: AuthService, public formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login(this.loginForm.value);
  }
}
