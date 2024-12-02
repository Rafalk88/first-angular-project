import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'this string loaded dynamically';
}
