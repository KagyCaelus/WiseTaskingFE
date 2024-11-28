import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { userLogin } from '../../models/userLogin';
import { map } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { environment } from '../../environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user : userLogin = {
    email: '',
    password: ''
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router : Router, private authSvc : AuthService, private snackbar: MatSnackBar) {}
  
  GoToSignUp() : void {
    this.router.navigate(['/register'])
  }

  Login(): void {
    this.authSvc.login(this.user).pipe(map(res => {
      if(res == null) {
        this.snackbar.open('An error has occurred ','Ok',{
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      }
      if(res.success) {
        localStorage.setItem('token', res.accessToken)
        localStorage.setItem('userId', res.userId)
        this.router.navigate(['/user/home'])
      } else {
        this.snackbar.open(`${res.message}`,'Ok',{
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      }
    })).subscribe()
  }

}
