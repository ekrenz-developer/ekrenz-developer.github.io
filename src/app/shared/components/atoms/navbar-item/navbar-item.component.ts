import { Component, Input } from '@angular/core';

import { NavbarItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
})
export class NavbarItemComponent {
  @Input() item!: NavbarItemInputInterface;
}
