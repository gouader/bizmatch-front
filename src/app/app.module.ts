import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LogoComponent } from './layout/logo/logo.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { HomeComponent } from './layout/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { ServiceBizComponent } from './components/user/service-biz/service-biz.component';
import { AccueilComponent } from './components/admin/accueil/accueil.component';
import { ResetPasswordFinalStepComponent } from './components/user/reset-password-final-step/reset-password-final-step.component';
import { ListeUtilisateurComponent } from './components/admin/liste-utilisateur/liste-utilisateur.component';
import { BlogComponent } from './components/user/blog/blog.component';
import { DetailBlogComponent } from './components/user/detail-blog/detail-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,

    ResetPasswordComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ServiceBizComponent,
    AccueilComponent,
    ResetPasswordFinalStepComponent,
    ListeUtilisateurComponent,
    BlogComponent,
    DetailBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
