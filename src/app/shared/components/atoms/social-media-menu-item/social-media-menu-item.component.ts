import { Component, Input } from '@angular/core';

import { SocialMediaMenuItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-social-media-menu-item',
  templateUrl: './social-media-menu-item.component.html',
})
export class SocialMediaMenuItemComponent {
  @Input() item!: SocialMediaMenuItemInputInterface;

  goToUrl(): void {
    window.open(this.item.url, '_blank');
  }
}
