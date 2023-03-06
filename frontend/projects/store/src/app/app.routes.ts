import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [

  {
    path: 'auth/client',
    loadChildren: () => import('./components/auth/auth.routes').then(m => m.AUTH_ROUTES),
  }
]
