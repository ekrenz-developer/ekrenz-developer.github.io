import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { TechSectionInputInterface } from '@shared/interfaces/tech-section-input.interface';
import { ProjectSectionInputInterface } from '@shared/interfaces/project-section-input.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  techSectionProps!: TechSectionInputInterface;
  projectSectionProps!: ProjectSectionInputInterface;

  // readonly breakpoint$ = this._breakpointObserver.observe([
  //   Breakpoints.Large,
  //   Breakpoints.Medium,
  //   Breakpoints.Small,
  //   '(min-width: 500px)',
  // ]);

  constructor(private _breakpointObserver: BreakpointObserver) {}

  // (max-width: 599.98px)
  // :
  // false
  // (min-width: 600px) and (max-width: 959.98px)
  // :
  // false
  // (min-width: 960px) and (max-width: 1279.98px)
  // :
  // false
  // (min-width: 1280px) and (max-width: 1919.98px)
  // :
  // false
  // (min-width: 1920px)
  // :
  // true

  ngOnInit() {
    this._breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      // .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        console.log('ACA TEST', result);
        // for (const query of Object.keys(result.breakpoints)) {
        //   if (result.breakpoints[query]) {
        //     this.currentScreenSize =
        //       this.displayNameMap.get(query) ?? 'Unknown';
        //   }
        // }
      });

    this.techSectionProps = {
      header: {
        title: 'My Tech Stack',
        subtitle: `Technologies I've been working with recently`,
      },
      techList: [
        { url: '/assets/svgs/js.svg' },
        { url: '/assets/svgs/ts.svg' },
        { url: '/assets/svgs/node.svg' },
        { url: '/assets/svgs/nestjs.svg' },
        { url: '/assets/svgs/postgresql.svg' },
        { url: '/assets/svgs/aws.svg' },
        { url: '/assets/svgs/react.svg' },
        { url: '/assets/svgs/angular.svg' },
        { url: '/assets/svgs/vuejs.svg' },
        { url: '/assets/svgs/tailwindcss.svg' },
        { url: '/assets/svgs/github-actions.svg' },
        { url: '/assets/svgs/docker.svg' },
      ],
    };

    this.projectSectionProps = {
      header: {
        title: 'Projects',
        subtitle: `Things I've built so far`,
      },
      projectList: [
        {
          cover:
            'https://st4.depositphotos.com/1907633/21216/i/450/depositphotos_212162066-stock-photo-coding-software-developer-work-new.jpg',
          title: 'Project Tile goes here',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: 'Tech stack : HTML , JavaScript, SASS, React',
          githubUrl: 'url',
        },
        {
          cover:
            'https://st4.depositphotos.com/1907633/21216/i/450/depositphotos_212162066-stock-photo-coding-software-developer-work-new.jpg',
          title: 'Project Tile goes here',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: 'Tech stack : HTML , JavaScript, SASS, React',
          githubUrl: 'url',
        },
        {
          cover:
            'https://st4.depositphotos.com/1907633/21216/i/450/depositphotos_212162066-stock-photo-coding-software-developer-work-new.jpg',
          title: 'Project Tile goes here',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: 'Tech stack : HTML , JavaScript, SASS, React',
          githubUrl: 'url',
        },
        {
          cover:
            'https://st4.depositphotos.com/1907633/21216/i/450/depositphotos_212162066-stock-photo-coding-software-developer-work-new.jpg',
          title: 'Project Tile goes here',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: 'Tech stack : HTML , JavaScript, SASS, React',
          githubUrl: 'url',
        },
        {
          cover:
            'https://st4.depositphotos.com/1907633/21216/i/450/depositphotos_212162066-stock-photo-coding-software-developer-work-new.jpg',
          title: 'Project Tile goes here',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: 'Tech stack : HTML , JavaScript, SASS, React',
          githubUrl: 'url',
        },
        {
          cover:
            'https://st4.depositphotos.com/1907633/21216/i/450/depositphotos_212162066-stock-photo-coding-software-developer-work-new.jpg',
          title: 'Project Tile goes here',
          description:
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
          techStack: 'Tech stack : HTML , JavaScript, SASS, React',
          githubUrl: 'url',
        },
      ],
    };
  }
}
