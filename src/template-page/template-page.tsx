import { Outlet, useMatch } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { AppRoute } from '../constants';
import Anchor from '../components/anchor/anchor';
import CallItem from '../components/call-item/call-item';
import { CameraType } from '../types';

type TemplatePageProps = {
  activeProduct: CameraType | null | undefined;
  isActiveModal: boolean;
  onClick: (camera: null) => void;
}

const TemplatePage = ({activeProduct, isActiveModal, onClick}: TemplatePageProps): JSX.Element => {
  const match = useMatch(AppRoute.Camera);
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
        {isActiveModal && activeProduct && <CallItem activeProduct={activeProduct} onClick={onClick} />}
      </main>
      {match && <Anchor />}
      <Footer />
    </div>
  );
};

export default TemplatePage;
