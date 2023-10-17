import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniprojet';
  constructor(private router: Router) {}
  isAccueilAdminPage() {
    return this.router.url === '/accueilAdmin';
  }
  isListeUtilisateurPage() {
    return this.router.url === '/listeUtilisateur';
  }
 
}
