import { Outlet, useMatch } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { AppRoute } from '../constants';
import Anchor from '../components/anchor/anchor';

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
