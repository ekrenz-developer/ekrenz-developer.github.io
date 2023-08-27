import { Component, OnInit } from '@angular/core';

import {
  NavbarItemInputInterface,
  SocialMediaMenuItemInputInterface,
} from '@shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  navbarListItem: NavbarItemInputInterface[] = [];
  socialMediaListItem: SocialMediaMenuItemInputInterface[] = [];

  ngOnInit() {
    this.navbarListItem = [{ title: 'Home' }, { title: 'Contact' }];
    this.socialMediaListItem = [
      { icon: ['fab', 'github'] },
      { icon: ['fab', 'linkedin'] },
    ];
  }
}
