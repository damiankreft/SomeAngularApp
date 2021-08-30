import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/services/accountService/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class AccountRegisterComponent {
  public clicked = false;
  public registerForm: FormGroup;

  constructor(private accountService: AccountService, public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      repeatedPassword: new FormControl(''),
      role: new FormControl(),
    });
   }

  onSubmit(): void {
    this.clicked = true;
    this.accountService.register(this.registerForm.value)
      .subscribe(
        () => {},
        () => { this.clicked = false; },
        () => {
          this.registerForm.reset();
        });
  }
}
