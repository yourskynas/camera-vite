import { FooterTitle, NavLink, ResourceLink, SupportLink } from './constants';

export type FooterTitleType = typeof FooterTitle[keyof typeof FooterTitle];

export type ResourceLinkType = typeof ResourceLink[keyof typeof ResourceLink];

export type SupportLinkType = typeof SupportLink[keyof typeof SupportLink];

export type NavLinkType = typeof NavLink[keyof typeof NavLink];
