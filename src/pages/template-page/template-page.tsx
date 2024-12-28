import { Outlet, useMatch } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { AppRoute } from '../../constants';
import Anchor from '../../components/anchor/anchor';
import { CameraType } from '../../types';
import AddCamera from '../../components/add-camera/add-camera';
import { useAppSelector } from '../../hooks';
import { selectIsAddToCart, selectIsClearCart, selectIsContinue } from '../../store/main-process/selectors';
import ContinueItem from '../../components/continue-item/continue-item';
import ClearBasket from '../../components/clear-basket/clear-basket';

type TemplatePageProps = {
  activeProduct: CameraType | null | undefined;
  isActiveModal: boolean;
  onClick: (camera: null) => void;
}

const TemplatePage = ({activeProduct, isActiveModal, onClick}: TemplatePageProps): JSX.Element => {
  const match = useMatch(AppRoute.Camera);
  const isAddToCart = useAppSelector(selectIsAddToCart);
  const isContinue = useAppSelector(selectIsContinue);
  const isClearCart = useAppSelector(selectIsClearCart);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
        {isActiveModal && activeProduct && isAddToCart && <AddCamera activeProduct={activeProduct} onClick={onClick} />}
        {isActiveModal && isContinue && <ContinueItem onClick={onClick} />}
        {isActiveModal && activeProduct && isClearCart && <ClearBasket activeProduct={activeProduct} onClick={onClick} />}
      </main>
      {match && <Anchor />}
      <Footer />
    </div>
  );
};

export default TemplatePage;
