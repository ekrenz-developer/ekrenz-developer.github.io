import { Component, Input } from '@angular/core';

import { HeaderInputInterface } from '@shared/interfaces/header-input.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() props!: HeaderInputInterface;

  get isLaptopAndUp(): boolean {
    return !(
      this.props.currentScreenSize === 'mobile' ||
      this.props.currentScreenSize === 'tablet'
    );
  }
}
