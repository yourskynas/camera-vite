import Banner from '../components/banner/banner';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import CatalogSection from '../components/catalog-section/catalog-section';
import { CameraType } from '../types';

type CatalogPageProps = {
  onClick: (camera: CameraType) => void;
}

const CatalogPage = ({onClick}: CatalogPageProps): JSX.Element => (
  <>
    <Banner />
    <div className="page-content">
      <Breadcrumbs />
      <CatalogSection onClick={onClick} />
    </div>
  </>
);

export default CatalogPage;
