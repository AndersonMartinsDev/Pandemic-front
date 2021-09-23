import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/auth' },
    { path: 'auth', loadChildren: () => import('src/app/pages/security/security.module').then(m => m.SecurityModule) },
    { path: 'welcome', loadChildren: () => import('src/app/pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  ];