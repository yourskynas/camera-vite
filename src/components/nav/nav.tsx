import { nanoid } from '@reduxjs/toolkit';
import { AppRoute, NavLink } from '../../constants';
import { Link } from 'react-router-dom';

type NavItemProps = {
  link: typeof NavLink[keyof typeof NavLink];
}

const NavItem = ({link}: NavItemProps): JSX.Element => (
  <li className="main-nav__item" data-testid='nav-element'>
    <Link className="main-nav__link" to={AppRoute.Catalog}>{link}</Link>
  </li>
);

const Nav = (): JSX.Element => (
  <nav className="main-nav header__main-nav" data-testid='nav-container'>
    <ul className="main-nav__list">
      {Object.values(NavLink).map((link) => <NavItem key={nanoid()} link={link} />)}
    </ul>
  </nav>
);

export default Nav;
