import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/LoginService/login.service';
import { JwtToken } from 'src/app/models/jwt-token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class AccountSignInComponent implements OnInit {
  email = new FormControl();
  password = new FormControl();
  public jwtToken: JwtToken = new JwtToken();
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login(this.email.value, this.password.value).subscribe(
      (res) => { this.jwtToken = res; localStorage.setItem("access_token", this.jwtToken.token); },
      (error) => {console.log(error)}, 
      () => { 
        localStorage.setItem("access_token", this.jwtToken.token);
      }
      );
  }
}
