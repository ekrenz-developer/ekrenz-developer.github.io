import { Component } from '@angular/core';

import { INTERNAL_ROUTES } from '@data/constants';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  path = INTERNAL_ROUTES.HOME;
}
