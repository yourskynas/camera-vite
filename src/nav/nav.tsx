import { nanoid } from '@reduxjs/toolkit';
import { NavLink } from '../constants';

type NavItemProps = {
  link: typeof NavLink[keyof typeof NavLink];
}

const NavItem = ({link}: NavItemProps): JSX.Element => (
  <li className="main-nav__item">
    <a className="main-nav__link" href="catalog.html">{link}</a>
  </li>
);

const Nav = (): JSX.Element => (
  <nav className="main-nav header__main-nav">
    <ul className="main-nav__list">
      {Object.values(NavLink).map((link) => <NavItem key={nanoid()} link={link} />)}
    </ul>
  </nav>
);

export default Nav;
