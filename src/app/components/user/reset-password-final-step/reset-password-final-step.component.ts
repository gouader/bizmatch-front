import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-reset-password-final-step',
  templateUrl: './reset-password-final-step.component.html',
  styleUrls: ['./reset-password-final-step.component.css']
})
export class ResetPasswordFinalStepComponent {

  token: string = ''; // Initialize token
  newPassword: string = ''; // Initialize newPassword
  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private router: Router
  ) { }

    ngOnInit() {
      this.route.queryParamMap.subscribe(params => {
        this.token = params.get('token') || '';
      });
    }
  resetPassword() {
    this.userService.resetPassword(this.token, this.newPassword).subscribe(
      (response) => {
        alert('Password reset successful');
        console.log('Password reset successful:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Password reset successful');
        console.error('Password reset failed:', error);
        console.log('Complete error response:', error);
      }
    );
  }
  
 
}