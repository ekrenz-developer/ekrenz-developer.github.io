import { Component, OnInit } from '@angular/core';

import { TechSectionInputInterface } from '@shared/interfaces/tech-section-input.interface';
import { ProjectSectionInputInterface } from '@shared/interfaces/project-section-input.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  techSectionProps!: TechSectionInputInterface;
  projectSectionProps!: ProjectSectionInputInterface;

  ngOnInit() {
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
