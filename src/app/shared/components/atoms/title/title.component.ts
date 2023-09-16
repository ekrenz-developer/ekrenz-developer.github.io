import { Component, Input } from '@angular/core';

import { TitleInputInterface } from '@shared/interfaces/title-input.interface';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() props!: TitleInputInterface;
}
