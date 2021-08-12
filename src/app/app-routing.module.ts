import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRegisterComponent } from './accountComponents/register/register.component';
import { AccountSignInComponent } from './accountComponents/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'sign-in', component: AccountRegisterComponent },
  { path: 'register', component: AccountSignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
