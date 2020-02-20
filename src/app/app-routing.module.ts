import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProductDetailsComponent} from './product-details/product-details.component'
import {AuthGuard} from './helpers/auth.guard'

const routes: Routes = [
  { path: '', component: ProductDetailsComponent, canActivate:[AuthGuard]},
    { path: 'login', component: LoginComponent },

    // otherwise redirect to product Details
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
