import { Component, Input } from '@angular/core';

import { SocialMediaMenuItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-social-media-menu',
  templateUrl: './social-media-menu.component.html',
})
export class SocialMediaMenuComponent {
  @Input() listItem!: SocialMediaMenuItemInputInterface[];
}
