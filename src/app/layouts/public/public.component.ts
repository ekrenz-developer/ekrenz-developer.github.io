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
        {
          title: 'Home',
          path: INTERNAL_ROUTES.HOME,
          type: 'header',
        },
        {
          title: 'About',
          path: INTERNAL_ROUTES.ABOUT,
          type: 'header',
        },
        {
          title: 'Tech Stack',
          path: INTERNAL_ROUTES.TECH_STACK,
          type: 'header',
        },
        {
          title: 'Projects',
          path: INTERNAL_ROUTES.PROJECTS,
          type: 'header',
        },
        {
          title: 'Contact',
          path: INTERNAL_ROUTES.CONTACT,
          type: 'header',
        },
      ],
      socialMediaListItem: [
        { icon: ['fab', 'github'], url: 'https://github.com/ekrenz-developer' },
        {
          icon: ['fab', 'linkedin'],
          url: 'https://www.linkedin.com/in/erik-krenz/',
        },
      ],
    };
    this.footerProps = {
      navbarListItem: [
        {
          title: 'Home',
          path: INTERNAL_ROUTES.HOME,
          type: 'footer',
        },
        {
          title: 'About',
          path: INTERNAL_ROUTES.ABOUT,
          type: 'footer',
        },
        {
          title: 'Tech Stack',
          path: INTERNAL_ROUTES.TECH_STACK,
          type: 'footer',
        },
        {
          title: 'Projects',
          path: INTERNAL_ROUTES.PROJECTS,
          type: 'footer',
        },
        {
          title: 'Contact',
          path: INTERNAL_ROUTES.CONTACT,
          type: 'footer',
        },
      ],
      socialMediaListItem: [
        { icon: ['fab', 'github'], url: 'https://github.com/ekrenz-developer' },
        {
          icon: ['fab', 'linkedin'],
          url: 'https://www.linkedin.com/in/erik-krenz/',
        },
      ],
    };
  }
}
