import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Property to track the collapsed state of the mobile menu
  isMenuCollapsed = true;

  // A simple method to toggle the menu state
  toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  // A method to close the menu (useful for when a link is clicked)
  closeMenu(): void {
    this.isMenuCollapsed = true;
  }
}
