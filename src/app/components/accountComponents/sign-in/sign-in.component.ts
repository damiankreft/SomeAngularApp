import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class AccountSignInComponent {
  public loginForm: FormGroup;
  constructor(private loginService: AuthService, public formBuilder: FormBuilder, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  login(): void {
    this.loginService.login(this.loginForm.value)
      .subscribe(() => {
        this.router.navigate(['']);
        this.loginForm.reset();
      });
  }
}
