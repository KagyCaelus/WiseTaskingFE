import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  selected = "";

  constructor(private authSvc : AuthService, private router: Router) {}

  logout() {
    this.authSvc.logout()
    this.router.navigate(['/login'])
  }
}
