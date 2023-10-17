import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
 email: string = ''; // A variable to store the email input value

 constructor(

 private route: ActivatedRoute,
 private userService: UserServiceService,
 private router: Router
) {}

 ngOnInit() {
  this.route.queryParamMap.subscribe(params => {
    const email = params.get('email');
    if (email) {
      this.onForgotPassword(email);
    } else {
    
      console.error('No email query parameter found in the URL.');
      
    }
  });
}

onForgotPassword(email: string) {
  this.userService.forgotPassword(email).subscribe(
    (response) => {
      alert('Password reset instructions have been sent. Please check your email.');
      console.log('Password reset instructions sent:', response);
      // Handle success, e.g., display a success message to the user.
      this.router.navigate(['/login']);
    },
    (error) => {
      alert('Password reset instructions have been sent. Please check your email.');
      console.error('Failed to send password reset request:', error);
    }
  );
}
}