import { Component, Input } from '@angular/core';

import { NavbarItemInputInterface } from '@shared/interfaces';
import { NavbarVariantType } from '@shared/types';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
})
export class NavbarItemComponent {
  @Input() item!: NavbarItemInputInterface;

  variant: Record<NavbarVariantType, string> = {
    header: 'text-secondary text-[20px]',
    footer: 'text-primary text-[18px]',
  };
}
