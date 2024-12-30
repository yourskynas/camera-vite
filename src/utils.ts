import { FooterTitle, NavLink, ResourceLink, SupportLink } from './constants';
import { CameraType, FooterTitleType, RatingType } from './types';

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
  if (isNaN(date.getTime())) {
    return '';
  }
  const formatedDate = date.toLocaleDateString('ru', {
    month: 'long',
    day: '2-digit'
  });
  return formatedDate;
};

export const createRatingList = (rating: RatingType) => {
  switch (rating) {
    case 1:
      return [true, false, false, false, false];
    case 2:
      return [true, true, false, false, false];
    case 3:
      return [true, true, true, false, false];
    case 4:
      return [true, true, true, true, false];
    case 5:
      return [true, true, true, true, true];
    default:
      return [false, false, false, false, false];
  }
};

export const groupById = (items: CameraType[]): Record<number, CameraType[]> => items.reduce((acc, item) => {
  if (!acc[item.id]) {
    acc[item.id] = [];
  }
  acc[item.id].push(item);
  return acc;
}, {} as Record<number, CameraType[]>);

