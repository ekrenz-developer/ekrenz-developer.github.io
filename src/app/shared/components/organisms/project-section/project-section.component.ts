import { Component, Input } from '@angular/core';

import { ProjectSectionInputInterface } from '@shared/interfaces/project-section-input.interface';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
})
export class ProjectSectionComponent {
  @Input() props!: ProjectSectionInputInterface;
}
