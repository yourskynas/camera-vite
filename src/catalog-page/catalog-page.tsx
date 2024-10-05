import Banner from '../banner/banner';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CatalogSection from '../catalog-section/catalog-section';

const CatalogPage = (): JSX.Element => (
  <>
    <Banner />
    <div className="page-content">
      <Breadcrumbs />
      <CatalogSection />
    </div>
  </>
);

export default CatalogPage;
