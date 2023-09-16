import { SectionHeaderInputInterface } from './section-header-input.interface';
import { TechItemInputInterface } from './tech-item-input.interface';

export interface TechSectionInputInterface {
  header: SectionHeaderInputInterface;
  techList: TechItemInputInterface[];
}
