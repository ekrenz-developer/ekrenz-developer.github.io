import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { HeaderInputInterface, FooterInputInterface } from '@shared/interfaces';
import { INTERNAL_ROUTES } from '@data/constants';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
})
export class PublicComponent implements OnInit {
  headerProps!: HeaderInputInterface;
  footerProps!: FooterInputInterface;

  screenSize: Record<string, 'mobile' | 'tablet' | 'laptop' | 'desktop'> = {
    '(max-width: 639px)': 'mobile',
    '(min-width: 640px) and (max-width: 1023px)': 'tablet',
    '(min-width: 1024px) and (max-width: 1279px)': 'laptop',
    '(min-width: 1280px)': 'desktop',
  };
  currentScreenSize!: 'mobile' | 'tablet' | 'laptop' | 'desktop';

  constructor(private _breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this._breakpointObserver
      .observe([
        '(max-width: 639px)',
        '(min-width: 640px) and (max-width: 1023px)',
        '(min-width: 1024px) and (max-width: 1279px)',
        '(min-width: 1280px)',
      ])
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.screenSize[query];
            this.headerProps = {
              ...this.headerProps,
              currentScreenSize: this.currentScreenSize,
            };
            this.footerProps = {
              ...this.footerProps,
              currentScreenSize: this.currentScreenSize,
            };
          }
        }
      });

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
      currentScreenSize: this.currentScreenSize,
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
      currentScreenSize: this.currentScreenSize,
    };
  }
}
