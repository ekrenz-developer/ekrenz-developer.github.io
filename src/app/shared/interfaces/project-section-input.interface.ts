import { SectionHeaderInputInterface } from './section-header-input.interface';
import { ProjectCardInputInterface } from './project-card-input.interface';

export interface ProjectSectionInputInterface {
  header: SectionHeaderInputInterface;
  projectList: ProjectCardInputInterface[];
}
