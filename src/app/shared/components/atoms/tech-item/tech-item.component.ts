import { Component, Input } from '@angular/core';

import { TechItemInputInterface } from '@shared/interfaces/tech-item-input.interface';

@Component({
  selector: 'app-tech-item',
  templateUrl: './tech-item.component.html',
})
export class TechItemComponent {
  @Input() props!: TechItemInputInterface;
}
