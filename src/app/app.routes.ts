import { CanActivateFn, Routes } from '@angular/router';
import { TokenService } from './shared/services/token/token.service';
import { inject } from '@angular/core';
import { LoginComponent } from './public/login/login.component';

const tokenGuard: CanActivateFn = () => {
  const guardService = inject(TokenService);
  return guardService.isLogin()
}

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register', loadComponent: () => import('./public/register/register.component').then((c)=>c.RegisterComponent)},
];
