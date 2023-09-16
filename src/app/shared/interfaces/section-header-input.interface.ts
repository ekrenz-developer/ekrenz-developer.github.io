import { TitleInputInterface } from './title-input.interface';
import { SubtitleInputInterface } from './subtitle-input.interface';

export interface SectionHeaderInputInterface {
  title: TitleInputInterface['title'];
  subtitle: SubtitleInputInterface['subtitle'];
}
