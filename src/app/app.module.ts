import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { HomeComponent } from './pages/home/home.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { IfbaianoComponent } from './pages/ifbaiano/ifbaiano.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ProfileComponent,
    AddProductComponent,
    UpdateProductComponent,
    HomeComponent,
    DevelopersComponent,
    IfbaianoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
