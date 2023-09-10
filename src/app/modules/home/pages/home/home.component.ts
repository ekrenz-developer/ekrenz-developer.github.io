import { Component, OnInit } from '@angular/core';

import { TechSectionInputInterface } from '@shared/interfaces/tech-section-input.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  techSectionProps!: TechSectionInputInterface;

  ngOnInit() {
    this.techSectionProps = {
      header: { title: 'titulo', subtitle: 'asda' },
      techList: [
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
        { image: '/assets/images/ts-logo-128.png' },
      ],
    };
  }
}
