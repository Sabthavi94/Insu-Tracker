import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'myhome',
    loadChildren: () => import('./pages/myhome/myhome.module').then(m => m.MyhomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'driving-insight',
    loadChildren: () => import('./pages/driving-insight/driving-insight.module').then(m => m.DrivingInsightPageModule)
  },
  {
    path: 'data-input',
    loadChildren: () => import('./pages/data-input/data-input.module').then(m => m.DataInputPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'trip-details',
    loadChildren: () => import('./pages/trip-details/trip-details.module').then(m => m.TripDetailsPageModule)
  },
  {
    path: 'accident-spots',
    loadChildren: () => import('./pages/accident-spots/accident-spots.module').then(m => m.AccidentSpotsPageModule)
  },  {
    path: 'mytrips',
    loadChildren: () => import('./pages/mytrips/mytrips.module').then( m => m.MytripsPageModule)
  },
  {
    path: 'discount',
    loadChildren: () => import('./pages/discount/discount.module').then( m => m.DiscountPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
