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
          variant: 'header',
        },
        {
          title: 'About',
          path: INTERNAL_ROUTES.ABOUT,
          variant: 'header',
        },
        {
          title: 'Tech Stack',
          path: INTERNAL_ROUTES.TECH_STACK,
          variant: 'header',
        },
        {
          title: 'Projects',
          path: INTERNAL_ROUTES.PROJECTS,
          variant: 'header',
        },
        {
          title: 'Contact',
          path: INTERNAL_ROUTES.CONTACT,
          variant: 'header',
        },
      ],
      socialMediaListItem: [
        {
          icon: ['fab', 'github'],
          url: 'https://github.com/ekrenz-developer',
          variant: 'header',
        },
        {
          icon: ['fab', 'linkedin'],
          url: 'https://www.linkedin.com/in/erik-krenz/',
          variant: 'header',
        },
      ],
    };
    this.footerProps = {
      navbarListItem: [
        {
          title: 'Home',
          path: INTERNAL_ROUTES.HOME,
          variant: 'footer',
        },
        {
          title: 'About',
          path: INTERNAL_ROUTES.ABOUT,
          variant: 'footer',
        },
        {
          title: 'Tech Stack',
          path: INTERNAL_ROUTES.TECH_STACK,
          variant: 'footer',
        },
        {
          title: 'Projects',
          path: INTERNAL_ROUTES.PROJECTS,
          variant: 'footer',
        },
        {
          title: 'Contact',
          path: INTERNAL_ROUTES.CONTACT,
          variant: 'footer',
        },
      ],
      socialMediaListItem: [
        {
          icon: ['fab', 'github'],
          url: 'https://github.com/ekrenz-developer',
          variant: 'footer',
        },
        {
          icon: ['fab', 'linkedin'],
          url: 'https://www.linkedin.com/in/erik-krenz/',
          variant: 'footer',
        },
      ],
    };
  }
}
