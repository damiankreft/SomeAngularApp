import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../components/accountComponents/accounts/accounts.component';
import { AccountRegisterComponent } from '../components/accountComponents/register/register.component';
import { AccountSignInComponent } from '../components/accountComponents/sign-in/sign-in.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuardService as AuthGuard }  from '../services/authGuardService/auth-guard.service';
import { RoleGuardService as RoleGuard } from '../services/roleGuardService/role-guard.service';

const routes: Routes = [
  { path: 'register', component: AccountRegisterComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: AccountSignInComponent },
  { path: 'accounts', component: AccountsComponent, canActivate: [RoleGuard], data: {
    expectedRole: "admin",
  } },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
