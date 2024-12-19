import { Outlet, useMatch } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../constants';
import Anchor from '../../components/anchor/anchor';
import { CameraType } from '../../types';
import AddCamera from '../../components/add-camera/add-camera';
import { useAppSelector } from '../../hooks';
import { selectIsContinue } from '../../store/main-process/selectors';
import ContinueItem from '../../components/continue-item/continue-item';

type TemplatePageProps = {
  activeProduct: CameraType | null | undefined;
  isActiveModal: boolean;
  onClick: (camera: null) => void;
}

const TemplatePage = ({activeProduct, isActiveModal, onClick}: TemplatePageProps): JSX.Element => {
  const match = useMatch(AppRoute.Camera);
  const isContinue = useAppSelector(selectIsContinue);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
        {isActiveModal && activeProduct && !isContinue && <AddCamera activeProduct={activeProduct} onClick={onClick} />}
        {isActiveModal && isContinue && <ContinueItem onClick={onClick} />}
      </main>
      {match && <Anchor />}
      <Footer />
    </div>
  );
};

export default TemplatePage;
