import { Component, Input } from '@angular/core';

import { NavbarItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent {
  @Input() listItem!: NavbarItemInputInterface[];

  isOpen = false;

  toggleButton() {
    this.isOpen = !this.isOpen;
  }
}
