import { Component, Input } from '@angular/core';

import { SubtitleInputInterface } from '@shared/interfaces/subtitle-input.interface';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
})
export class SubtitleComponent {
  @Input() props!: SubtitleInputInterface;
}
