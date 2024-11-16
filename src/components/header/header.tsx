import FormSearch from '../form-search/form-search';
import Logo from '../logo/logo';
import Nav from '../nav/nav';

const Header = (): JSX.Element => (
  <header className="header" id="header" data-testid='header-test'>
    <div className="container">
      <Logo position='header' />
      <Nav />
      <FormSearch />
    </div>
  </header>
);

export default Header;
