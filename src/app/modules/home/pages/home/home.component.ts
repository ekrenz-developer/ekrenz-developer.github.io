import { Component, OnInit } from '@angular/core';

import { MenuItemInputInterface } from '@shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  listItem: MenuItemInputInterface[] = [];

  ngOnInit() {
    this.listItem = [{ title: 'Home' }, { title: 'Contact' }];
  }
}
