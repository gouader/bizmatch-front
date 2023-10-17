import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { User } from 'src/app/model/user';
import {Router} from "@angular/router";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user: User = {}; // Initialisez votre utilisateur avec un objet vide ou des valeurs par défaut
  registrationSuccess: boolean = false;
  constructor(private s: UserServiceService, private router: Router) {}

  registerUser() {
    this.s.registerUser(this.user).subscribe(() => {
      alert('Inscription réussie !');
      console.log('Inscription réussie !');
      this.registrationSuccess = true; 
      // Vous pouvez également rediriger l'utilisateur vers une autre page après l'inscription
      // Redirigez l'utilisateur vers la page d'accueil après une authentification réussie.
      this.router.navigate(['/login']); 
    });
  }
  closeAlert() {
    this.registrationSuccess = false; // Fermez l'alerte en définissant registrationSuccess à false
  }
}




