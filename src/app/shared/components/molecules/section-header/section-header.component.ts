import { Component, Input } from '@angular/core';

import { SectionHeaderInputInterface } from '@shared/interfaces/section-header-input.interface';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  @Input() props!: SectionHeaderInputInterface;
}
