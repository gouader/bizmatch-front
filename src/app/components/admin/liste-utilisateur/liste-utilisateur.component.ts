import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {

  users: User[] = []; // Utilisez un tableau de type User pour stocker la liste des utilisateurs
 
  colorClasses: string[] = [
   
    'table-primary',
    'table-secondary',
    'table-success',
    'table-info', 
    'table-primary',
    'table-secondary',
    'table-success',
    'table-info',
  
  ];

  constructor(private userService: UserServiceService) { }

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
      alert('L\'utilisateur a été supprimé avec succès.');
      window.location.reload(); 
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
  
  blockUserButtonClick(id: any) {

    
    this.userService.blockUser(id).subscribe(
      (response: any) => {   
      
        console.log('Réponse du serveur :', response);
        // Vous pouvez également mettre à jour la liste des utilisateurs ici si nécessaire.
      
      // Appel à la méthode pour recharger la page

      
      (error: any) => {
        console.error('Erreur lors du blocage de l\'utilisateur :', error);
      }
    });
    window.location.reload(); 
    }

// ListeUtilisateurComponent.ts
unblockUserButtonClick(id: any) {
  this.userService.unblockUser(id).subscribe(
    (response: any) => { 
      
      console.log('Réponse du serveur :', response);
      // Vous pouvez également mettre à jour la liste des utilisateurs ici si nécessaire.
     
      
    },
    (error: any) => {
      console.error('Erreur lors du déblocage de l\'utilisateur :', error);
     
    }
    
  );
  window.location.reload(); 
}

}