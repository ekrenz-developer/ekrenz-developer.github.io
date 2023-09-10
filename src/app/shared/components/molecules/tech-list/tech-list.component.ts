import { Component, Input } from '@angular/core';

import { TechItemInputInterface } from '@shared/interfaces/tech-item-input.interface';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
})
export class TechListComponent {
  @Input() listItem!: TechItemInputInterface[];
}
