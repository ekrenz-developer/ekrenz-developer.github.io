import { Component, Input } from '@angular/core';

import { MenuItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() listItem!: MenuItemInputInterface[];
}
