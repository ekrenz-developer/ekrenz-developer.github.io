import { Component, OnInit } from '@angular/core';

import { HeaderInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
})
export class PublicComponent implements OnInit {
  headerProps!: HeaderInputInterface;

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
  }
}
