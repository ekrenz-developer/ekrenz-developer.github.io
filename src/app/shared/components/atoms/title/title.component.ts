import { Component, Input } from '@angular/core';

import { TitleInputInterface } from '@shared/interfaces/title-input.interface';
import { SectionHeaderVariantType } from '@shared/types/section-header-variant.type';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() props!: TitleInputInterface;

  variant: Record<SectionHeaderVariantType, string> = {
    primary: 'text-[48px] justify-self-center',
    secondary: 'text-[42px] justify-self-start',
  };

  get currentVariant() {
    return this.props.variant
      ? this.variant[this.props.variant]
      : this.variant['primary'];
  }
}
