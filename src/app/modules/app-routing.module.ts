import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../components/accountComponents/accounts/accounts.component';
import { AccountRegisterComponent } from '../components/accountComponents/register/register.component';
import { AccountSignInComponent } from '../components/accountComponents/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'register', component: AccountRegisterComponent },
  { path: 'sign-in', component: AccountSignInComponent },
  { path: 'accounts', component: AccountsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
