import { nanoid } from '@reduxjs/toolkit';
import { FooterTitle, SOCIAL_MEDIA } from '../../constants';
import Logo from '../logo/logo';
import { FooterTitleType, NavLinkType, ResourceLinkType, SupportLinkType } from '../../types';
import { getLinksByTitle } from '../../utils';

type FooterNavItemProps = {
  title: FooterTitleType;
}

type FooterItemProps = {
  link: ResourceLinkType | SupportLinkType | NavLinkType ;
}

type SocialItemProps = {
  social: string;
}

const SocialItem = ({social}: SocialItemProps): JSX.Element => (
  <li className="social__item">
    <a className="link" href="#" aria-label={`Переход на страницу ${social}`}>
      <svg width="20" height="20" aria-hidden="true">
        <use xlinkHref={`#icon-${social}`}></use>
      </svg>
    </a>
  </li>
);

const FooterItem = ({link}: FooterItemProps): JSX.Element => (
  <li className="footer__item">
    <a className="link" href="#">{link}
    </a>
  </li>
);

const FooterNavItem = ({title}: FooterNavItemProps): JSX.Element => {
  const links = getLinksByTitle(title);
  return (
    <li className="footer__nav-item">
      <p className="footer__title">{title}</p>
      <ul className="footer__list">
        {Object.values(links).map((link) => <FooterItem key={nanoid()} link={link} />)}
      </ul>
    </li>
  );
};

const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="container">
      <div className="footer__info">
        <Logo position="footer" />
        <p className="footer__description">Интернет-магазин фото- и видеотехники</p>
        <ul className="social">
          {SOCIAL_MEDIA.map((social) => <SocialItem key={nanoid()} social={social} />)}
        </ul>
      </div>
      <ul className="footer__nav">
        {Object.values(FooterTitle).map((title) => <FooterNavItem key={nanoid()} title={title} />)}
      </ul>
    </div>
  </footer>
);

export default Footer;
