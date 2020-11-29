import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'logged-in', component: LoggedInComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
