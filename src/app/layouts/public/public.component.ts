import { Component, OnInit } from '@angular/core';

import { HeaderInputInterface, FooterInputInterface } from '@shared/interfaces';

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
        { title: 'Home' },
        { title: 'About' },
        { title: 'Tech Stack' },
        { title: 'Projects' },
        { title: 'Contact' },
      ],
      socialMediaListItem: [
        { icon: ['fab', 'github'] },
        { icon: ['fab', 'linkedin'] },
      ],
    };
    this.footerProps = this.headerProps;
  }
}
