import { Component, Input } from '@angular/core';

import { WorkExperienceSectionInputInterface } from '@shared/interfaces/work-experience-section-input.interface';

@Component({
  selector: 'app-work-experience-section',
  templateUrl: './work-experience-section.component.html',
})
export class WorkExperienceSectionComponent {
  @Input() props!: WorkExperienceSectionInputInterface;
}
