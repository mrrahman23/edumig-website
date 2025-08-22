import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { NgIf, NgClass } from '@angular/common';
import { AppLogoComponent } from '../applogo/applogo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, AppLogoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isSticky = false;
  mobileOpen = false;
  auth = inject(AuthService);
  private router = inject(Router);

  @HostListener('window:scroll') onScroll() {
    this.isSticky = window.scrollY > 10;
  }

  toggleMobile() { this.mobileOpen = !this.mobileOpen; }
  closeMobile() { this.mobileOpen = false; }

  onLogin()  { 
    this.closeMobile(); this.router.navigate(['/sign-in']); 
  }
  async onLogout() { 
    await this.auth.logout(); 
    this.closeMobile(); 
    this.router.navigate(['/sign-in']); 
  }
}

