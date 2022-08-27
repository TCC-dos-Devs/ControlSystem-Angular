import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '/login', component: SignInComponent },
  { path: '/cadastro', component: SignUpComponent },
  { path: '/esqueceu-senha', component: ForgetPasswordComponent },
  { path: '/home', component: HomeComponent },
  { path: '/adicionar-produto', component: AddProductComponent },
  { path: '/atualizar-produto', component: UpdateProductComponent },
  { path: '/profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
