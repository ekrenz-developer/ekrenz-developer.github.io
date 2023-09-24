import { TitleInputInterface } from './title-input.interface';
import { SubtitleInputInterface } from './subtitle-input.interface';
import { SectionHeaderVariantType } from '@shared/types/section-header-variant.type';

export interface SectionHeaderInputInterface {
  title: TitleInputInterface['title'];
  subtitle: SubtitleInputInterface['subtitle'];
  variant?: SectionHeaderVariantType;
}
