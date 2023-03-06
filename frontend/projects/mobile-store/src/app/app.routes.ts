import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {path: 'welcome', loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent)},
  {path: 'walkthrough', loadComponent: () => import('./pages/walkthrough/walkthrough.component').then(m => m.WalkthroughComponent)},
]
