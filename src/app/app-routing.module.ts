import { AuthGuard } from './core/guards/auth.guard';
import { IsLoggedGuard } from './core/guards/is-logged.guard';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: 'login', pathMatch:'full'},
  { path: "login", component: LoginComponent, canActivate: [IsLoggedGuard] },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path:"forget-password", component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
