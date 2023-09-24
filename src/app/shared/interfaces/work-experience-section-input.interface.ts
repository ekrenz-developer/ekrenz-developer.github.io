import { TitleInputInterface } from './title-input.interface';
import { WorkExperienceItemInputInterface } from './work-experience-item-input.interface';

export interface WorkExperienceSectionInputInterface {
  title: TitleInputInterface;
  itemList: WorkExperienceItemInputInterface[];
}
