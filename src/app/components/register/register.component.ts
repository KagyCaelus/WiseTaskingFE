import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { userRegister } from '../../models/userRegister';
import { map } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: userRegister = {
    email :'',
    username : '',
    password : '',
    repeatpassword : ''
  }

  username: string = '' 
  email: string = '' 
  password: string = '' 
  repeatpassword: string = '' 

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router : Router, private authSvc : AuthService, private snackbar: MatSnackBar) {}
  
  GoToSignIn() : void {
    this.router.navigate(['/login'])
  }

  SignUp() : void {
    console.log(this.user)


    this.authSvc.register(this.user).pipe(map(res => {
      console.log(res.succes)

      if(res.success) {
        this.GoToSignIn()
        this.snackbar.open(`${res.message}`,'Ok',{
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      } else {
        this.snackbar.open(`${res.message}`,'Ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      }
      
    })).subscribe()

    
  }

}
