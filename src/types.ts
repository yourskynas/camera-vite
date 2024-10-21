import { FooterTitle, NavLink, ResourceLink, SupportLink } from './constants';

export type FooterTitleType = typeof FooterTitle[keyof typeof FooterTitle];

export type ResourceLinkType = typeof ResourceLink[keyof typeof ResourceLink];

export type SupportLinkType = typeof SupportLink[keyof typeof SupportLink];

export type NavLinkType = typeof NavLink[keyof typeof NavLink];

export type CameraType = PromoType & {
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  level: string;
  price: number;
  rating: number;
  reviewCount: number;
};

export type ReviewType = {
  id: string;
  createAt: string;
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
};

export type PromoType = {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
};

export type OrderType = {
  camerasIds: number[];
  coupon: string | null;
  tel?: string;
};
