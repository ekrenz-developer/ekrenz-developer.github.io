import { Component, Input } from '@angular/core';

import { WorkExperienceSectionInputInterface } from '@shared/interfaces/work-experience-section-input.interface';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
})
export class EducationSectionComponent {
  @Input() props!: WorkExperienceSectionInputInterface;
}
