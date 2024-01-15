import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  users: User[] = []; // Utilisez un tableau de type User pour stocker la liste des utilisateurs

  constructor(private userService: UserServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data; // Stockez le tableau des utilisateurs dans la variable 'users'
      },
      
    );
  }
  deleteUser(id: number) {
    this.userService.removeUser(id)
      .subscribe()
        
  }

  updateUserFormSubmit(id: number, user: User) {
    this.userService.updateUser(id, user).subscribe(
      (updatedUser: User) => {
        console.log('Utilisateur mis à jour :', updatedUser);
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
      }
    );
  }
  
  blockUserButtonClick(id: number) {

    
    this.userService.blockUser(id).subscribe(
      (response: any) => {   window.location.reload();
        console.log('Réponse du serveur :', response);
        // Vous pouvez également mettre à jour la liste des utilisateurs ici si nécessaire.
      
      // Appel à la méthode pour recharger la page

      
      (error: any) => {
        console.error('Erreur lors du blocage de l\'utilisateur :', error);
      }
    });
    }

// ListeUtilisateurComponent.ts
unblockUserButtonClick(id: number) {
  this.userService.unblockUser(id).subscribe(
    (response: any) => {  window.location.reload();
      console.log('Réponse du serveur :', response);
      // Vous pouvez également mettre à jour la liste des utilisateurs ici si nécessaire.
     
      
    },
    (error: any) => {
      console.error('Erreur lors du déblocage de l\'utilisateur :', error);
     
    }
    
  );

}
reloadPage() {
  // Actualisez la page en naviguant vers la même URL avec un paramètre de requête différent
  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: { refresh: new Date().getTime() }
  });
}
}

 
  
  

