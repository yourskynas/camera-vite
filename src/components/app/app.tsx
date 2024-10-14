import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CatalogPage from '../../catalog-page/catalog-page';
import { AppRoute } from '../../constants';
import ProductPage from '../../product-page/product-page';
import TemplatePage from '../../template-page/template-page';
import NotFoundPage from '../../not-found-page/not-found-page';
import { useEffect, useState } from 'react';
import { CameraType } from '../../types';

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
    <BrowserRouter>
      <Routes>
        <Route element={<TemplatePage activeProduct={activeProduct} isActiveModal={isActiveModal} onClick={handleButtonClick} />}>
          <Route index element={<Navigate to={AppRoute.Catalog} />} />
          <Route path={AppRoute.Catalog} element={<CatalogPage onClick={handleButtonClick} />} />
          <Route path={AppRoute.Camera} element={<ProductPage onClick={handleButtonClick} />} />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
