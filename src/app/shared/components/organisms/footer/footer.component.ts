import { Component, Input } from '@angular/core';

import { FooterInputInterface } from '@shared/interfaces/footer-input.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() props!: FooterInputInterface;

  get isLaptopAndUp(): boolean {
    return !(
      this.props.currentScreenSize === 'mobile' ||
      this.props.currentScreenSize === 'tablet'
    );
  }
}
