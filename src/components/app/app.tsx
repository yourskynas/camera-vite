import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import { AppRoute } from '../../constants';
import ProductPage from '../../pages/product-page/product-page';
import TemplatePage from '../../pages/template-page/template-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { useEffect, useState } from 'react';
import { CameraType } from '../../types';
import { HelmetProvider } from 'react-helmet-async';
import BasketPage from '../../pages/basket-page/basket-page';

const App = (): JSX.Element => {
  const [ isActiveModal, setIsActiveModal ] = useState<boolean>(false);
  const [ activeProduct, setActiveProduct ] = useState<CameraType | null>();
  const handleButtonClick = (camera: CameraType | null) => {
    setIsActiveModal(!isActiveModal);
    setActiveProduct(camera);
  };

  useEffect(() => {
    let isMounted = true;
    if (isActiveModal && isMounted) {
      document.body.classList.add('scroll-lock');
    }

    return () => {
      isMounted = false;
      document.body.classList.remove('scroll-lock');
    };
  }, [isActiveModal]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<TemplatePage activeProduct={activeProduct} isActiveModal={isActiveModal} onClick={handleButtonClick} />}>
            <Route index element={<Navigate to={AppRoute.Catalog} />} />
            <Route path={AppRoute.Catalog} element={<CatalogPage onClick={handleButtonClick} />} />
            <Route path={AppRoute.Camera} element={<ProductPage onClick={handleButtonClick} />} />
            <Route path={AppRoute.Basket} element={<BasketPage />} />
            <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
