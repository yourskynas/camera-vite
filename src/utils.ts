import { FooterTitle, NavLink, ResourceLink, SupportLink } from './constants';
import { FooterTitleType } from './types';

export const getLinksByTitle = (title: FooterTitleType) => {
  switch(title) {
    case FooterTitle.Navigation:
      return NavLink;
    case FooterTitle.Resources:
      return ResourceLink;
    case FooterTitle.Support:
      return SupportLink;
  }
};
