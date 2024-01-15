import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './layout/home/home.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { ServiceBizComponent } from './components/user/service-biz/service-biz.component';
import { AccueilComponent } from './components/admin/accueil/accueil.component';
import { ResetPasswordFinalStepComponent } from './components/user/reset-password-final-step/reset-password-final-step.component';
import { ListeUtilisateurComponent } from './components/admin/liste-utilisateur/liste-utilisateur.component';
import { BlogComponent } from './components/user/blog/blog.component';
import { DetailBlogComponent } from './components/user/detail-blog/detail-blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, 

  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'forgotPassword', component: ResetPasswordComponent }, 
  { path: 'serviceBiz', component: ServiceBizComponent }, 
  { path: 'accueilAdmin', component: AccueilComponent }, 
  { path: 'resetPassword', component: ResetPasswordFinalStepComponent }, 
  { path: 'blog', component: BlogComponent }, 
  { path: 'detailBlog', component: DetailBlogComponent }, 

 
  { path: 'accueil', component: HomeComponent }, // Remplacez 'AccueilComponent' par le nom de votre composant d'accueil
  { path: 'listeUtilisateur', component: ListeUtilisateurComponent }, 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
