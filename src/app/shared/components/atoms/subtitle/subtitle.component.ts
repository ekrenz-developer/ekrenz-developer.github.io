import { Component, Input } from '@angular/core';

import { SubtitleInputInterface } from '@shared/interfaces/subtitle-input.interface';
import { SectionHeaderVariantType } from '@shared/types/section-header-variant.type';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
})
export class SubtitleComponent {
  @Input() props!: SubtitleInputInterface;

  variant: Record<SectionHeaderVariantType, string> = {
    primary: 'text-[32px] justify-self-center',
    secondary: 'text-[18px] justify-self-start max-w-[708px]',
  };

  get currentVariant() {
    return this.props.variant
      ? this.variant[this.props.variant]
      : this.variant['primary'];
  }
}
