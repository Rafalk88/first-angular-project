import {  Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <h2>Navbar</h2>
    <p>Dummy component</p>
    <button>Submit</button>
  `,
  styles: `
    h2 {
      color: red;
      background: black;
    }
  `
})
export class appNavbar {}
