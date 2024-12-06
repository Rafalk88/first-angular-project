import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, HeaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoggedIn: boolean = true;
  userName:string = 'John Doe';
}
