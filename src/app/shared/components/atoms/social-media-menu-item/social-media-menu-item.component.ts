import { Component, Input } from '@angular/core';

import { SocialMediaMenuItemInputInterface } from '@shared/interfaces';
import { NavbarVariantType } from '@shared/types';

@Component({
  selector: 'app-social-media-menu-item',
  templateUrl: './social-media-menu-item.component.html',
})
export class SocialMediaMenuItemComponent {
  @Input() item!: SocialMediaMenuItemInputInterface;

  variant: Record<NavbarVariantType, string> = {
    header: 'text-secondary',
    footer: 'text-primary',
  };

  goToUrl(): void {
    window.open(this.item.url, '_blank');
  }
}
