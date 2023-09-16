import { Component, Input } from '@angular/core';

import { ProjectCardInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  @Input() listItem!: ProjectCardInputInterface[];
}
