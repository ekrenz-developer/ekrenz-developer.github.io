import { Component, Input } from '@angular/core';

import { ProjectCardInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  @Input() props!: ProjectCardInputInterface;
}
