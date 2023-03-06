import { Routes } from "@angular/router";
export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'auth/client/login',
    pathMatch: 'full',
  },
  {
    path: 'confirm-signup',
    loadComponent: () => import('./verify-account-creation/verify-account-creation.component').then(m => m.VerifyAccountCreationComponent),
  }
]
