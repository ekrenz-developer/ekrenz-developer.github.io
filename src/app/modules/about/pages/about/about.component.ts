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
  educationSectionProps!: WorkExperienceSectionInputInterface;

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
          contract: 'Full Time',
          company: 'Todosgamers',
          location: 'Argentina, Remote',
          from: new Date('2020-10-01'),
        },
        {
          position: 'SSr. Analyst Programmer',
          contract: 'Full Time',
          company: 'Infomedical SA',
          location: 'Argentina',
          from: new Date('2017-07-01'),
          to: new Date('2020-09-30'),
        },
        {
          position: 'Jr. Analyst Programmer',
          contract: 'Full Time',
          company: 'Culligan',
          location: 'Argentina',
          from: new Date('2016-05-01'),
          to: new Date('2017-06-30'),
        },
        {
          position: 'Jr. Analyst Programmer',
          contract: 'Full Time',
          company: 'Accusys Technology',
          location: 'Argentina',
          from: new Date('2014-08-01'),
          to: new Date('2016-04-30'),
        },
      ],
    };
    this.educationSectionProps = {
      title: {
        title: 'Education',
        variant: 'secondary',
      },
      itemList: [
        {
          position: 'Higher Technician in Systems Analysis',
          company: 'IFTS 19',
          location: 'Argentina',
          from: new Date('2016-03-01'),
          to: new Date('2019-12-01'),
        },
        {
          position: 'Technician in Computer Programming',
          company: 'Technical School Nº3',
          location: 'Argentina',
          from: new Date('2008-03-01'),
          to: new Date('2013-12-01'),
        },
      ],
    };
  }
}
