import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRegisterComponent } from './components/accountComponents/register/register.component';
import { AccountSignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'register', component: AccountRegisterComponent },
  { path: 'sign-in', component: AccountSignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
