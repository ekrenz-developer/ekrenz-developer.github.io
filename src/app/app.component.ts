import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Erik Krenz';

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: 'This is the portfolio of Erik Krenz',
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Erik Krenz, Software Developer',
    });
  }
}
