import { Component, Input } from '@angular/core';

import { WorkExperienceItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
})
export class WorkExperienceListComponent {
  @Input() itemList!: WorkExperienceItemInputInterface[];
}
