import { Component, Input } from '@angular/core';

import { TechSectionInputInterface } from '@shared/interfaces/tech-section-input.interface';

@Component({
  selector: 'app-tech-section',
  templateUrl: './tech-section.component.html',
})
export class TechSectionComponent {
  @Input() props!: TechSectionInputInterface;
}
