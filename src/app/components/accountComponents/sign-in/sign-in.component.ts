import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class AccountSignInComponent implements OnInit{
  private returnUrl!: string;
  public loginForm: FormGroup;


  constructor(
    public formBuilder: FormBuilder, 
    private loginService: AuthService,
    private router: Router, 
    private route: ActivatedRoute) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(): void {
    this.loginService.login(this.loginForm.value)
      .subscribe(data => { this.router.navigateByUrl(this.returnUrl)});
  }
}
