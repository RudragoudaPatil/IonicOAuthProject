import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
