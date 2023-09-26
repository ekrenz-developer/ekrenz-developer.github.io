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
    header: 'text-[20px]',
    footer: 'text-[18px]',
  };
  //linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%)
  // hover:text-[#4b4fa6]
}
