import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { appNavbar } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, appNavbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelinventory';
}
