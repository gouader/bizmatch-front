import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';
import { logindata } from 'src/app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: logindata = {};
  loginError: string = '';
  captchaText: string = '';
  userCaptcha: string = '';
  isValid: boolean = true;

  constructor(private authService: UserServiceService, private router: Router) { }
  ngOnInit(): void {
   
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const captchaLength = 6;
    let captcha = '';
    for (let i = 0; i < captchaLength; i++) {
      captcha += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    this.captchaText = captcha;
  }

  verifyCaptcha() {
    if (this.userCaptcha !== this.captchaText) {
      this.isValid = false;
      return false;
    }
    return true;
  }
 

  login(): void {
    if (this.loginData.username !== undefined && this.loginData.password !== undefined) {
      this.authService.login(this.loginData.username, this.loginData.password).subscribe(
      (response) => {
        const jwtToken = response.jwt;
        this.authService.storeToken(jwtToken);

        // Redirigez l'utilisateur vers la page d'accueil après une authentification réussie.
         this.router.navigate(['/listeUtilisateur']); 
        },
        (error) => {
            if (error.status === 401) {
                // Statut HTTP 401 signifie que l'authentification a échoué
                this.loginError = 'Identifiants incorrects. Veuillez réessayer.';
            } else {
                // Autre erreur
                this.loginError = 'Une erreur s\'est produite lors de l\'authentification. Veuillez réessayer.';

            }
        }
    );
}
} 
      
passwordVisible: boolean = false;

togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
}


}


