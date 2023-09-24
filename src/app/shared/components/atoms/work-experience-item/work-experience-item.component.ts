import { Component, Input } from '@angular/core';

import { WorkExperienceItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-work-experience-item',
  templateUrl: './work-experience-item.component.html',
})
export class WorkExperienceItemComponent {
  @Input() item!: WorkExperienceItemInputInterface;
}
