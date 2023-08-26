import { Component, Input } from '@angular/core';

import { MenuItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  @Input() item!: MenuItemInputInterface;
}
