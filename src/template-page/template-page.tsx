import { Outlet, useMatch } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import { AppRoute } from '../constants';
import Anchor from '../anchor/anchor';

const TemplatePage = (): JSX.Element => {
  const match = useMatch(AppRoute.Camera);
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      {match && <Anchor />}
      <Footer />
    </div>
  );
};

export default TemplatePage;