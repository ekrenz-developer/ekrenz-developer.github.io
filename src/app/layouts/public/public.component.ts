import { Component, OnInit } from '@angular/core';

import { HeaderInputInterface, FooterInputInterface } from '@shared/interfaces';
import { INTERNAL_ROUTES } from '@data/constants';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
})
export class PublicComponent implements OnInit {
  headerProps!: HeaderInputInterface;
  footerProps!: FooterInputInterface;

  ngOnInit() {
    this.headerProps = {
      navbarListItem: [
        { title: 'Home', path: INTERNAL_ROUTES.HOME },
        { title: 'About', path: INTERNAL_ROUTES.ABOUT },
        { title: 'Tech Stack', path: INTERNAL_ROUTES.TECH_STACK },
        { title: 'Projects', path: INTERNAL_ROUTES.PROJECTS },
        { title: 'Contact', path: INTERNAL_ROUTES.CONTACT },
      ],
      socialMediaListItem: [
        { icon: ['fab', 'github'] },
        { icon: ['fab', 'linkedin'] },
      ],
    };
    this.footerProps = this.headerProps;
  }
}
