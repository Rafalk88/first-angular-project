import {  Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class AppNavbar {
  title: string = "this loaded dynamically"
}
