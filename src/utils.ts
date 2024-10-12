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

export const humanizingDate = (value: string) => {
  const date = new Date(value);
  const formatedDate = date.toLocaleDateString('ru', {
    month: 'long',
    day: '2-digit'
  });
  return formatedDate;
};
