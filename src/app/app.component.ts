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
  imgURL: string = 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-303.png?sfvrsn=d8bbe35c_3';
  imgAlt: string = 'angular-picture';
}
