import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CatalogPage from '../catalog-page/catalog-page';
import { AppRoute } from '../constants';
import ProductPage from '../product-page/product-page';
import TemplatePage from '../template-page/template-page';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route element={<TemplatePage />}>
        <Route index element={<Navigate to={AppRoute.Camera} />} />
        <Route path={AppRoute.Catalog} element={<CatalogPage />} />
        <Route path={AppRoute.Camera} element={<ProductPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
