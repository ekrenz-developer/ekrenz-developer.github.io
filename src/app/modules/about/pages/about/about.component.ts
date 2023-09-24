import { Component, OnInit } from '@angular/core';

import { SectionHeaderInputInterface } from '@shared/interfaces/section-header-input.interface';
import { WorkExperienceSectionInputInterface } from '@shared/interfaces/work-experience-section-input.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  aboutSectionProps!: SectionHeaderInputInterface;
  workExperienceSectionProps!: WorkExperienceSectionInputInterface;

  ngOnInit() {
    this.aboutSectionProps = {
      title: 'About Me',
      subtitle:
        'I have been working as a software developer for a long time. I am self-taught, always learning. I am interested in new technologies and new trends.<br/> I consider myself to be great team player, committed and ambitious, and I have developed a responsible approach to any task I undertake, or situation that I am presented.',
      variant: 'secondary',
    };
    this.workExperienceSectionProps = {
      title: {
        title: 'Work Experience',
        variant: 'secondary',
      },
      itemList: [
        {
          position: 'SSr. Full Stack Developer',
          contract: 'fulltime',
          company: 'Todosgamers',
          location: 'Argentina, Remote',
          from: new Date('01/09/2020'),
        },
      ],
    };
  }
}
