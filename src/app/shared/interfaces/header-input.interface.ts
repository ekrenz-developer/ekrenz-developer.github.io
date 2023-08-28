import { SocialMediaMenuItemInputInterface } from './social-media-menu-item-input.interface';
import { NavbarItemInputInterface } from './navbar-item-input.interface';

export interface HeaderInputInterface {
  navbarListItem: NavbarItemInputInterface[];
  socialMediaListItem: SocialMediaMenuItemInputInterface[];
}
