import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'this string loaded dynamically';
  imgURL: string = 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-303.png?sfvrsn=d8bbe35c_3';
  imgAlt: string = 'angular-picture';
  isDisabled: boolean = false;
  isActive: boolean = false;
  fruitsName: string = 'apple';

  userName: string = 'John Doe';

  buttonClick() {
    alert('clicked button')
  }

  keyEnter(e: KeyboardEvent) {
    if (e.key === 'Enter') alert('Enter key pressed')
  }

  keyupFiltering(user: HTMLInputElement) {
    console.log(user.id)
  }

  updateUsername(username: HTMLInputElement) {
    this.userName = username.value;
    console.log(this.userName);
  }
}
