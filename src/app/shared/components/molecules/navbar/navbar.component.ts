import { Component, Input } from '@angular/core';

import { NavbarItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() listItem!: NavbarItemInputInterface[];
}
