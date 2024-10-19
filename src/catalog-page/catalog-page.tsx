import Banner from '../components/banner/banner';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import CatalogSection from '../components/catalog-section/catalog-section';
import { TitlePlug } from '../constants';
import { useAppSelector } from '../hooks';
import NotFoundPage from '../not-found-page/not-found-page';
import { selectCameras, selectIsCamerasDataLoading, selectIsCamerasError } from '../store/cameras-data/selectors';
import { CameraType } from '../types';

type CatalogPageProps = {
  onClick: (camera: CameraType) => void;
}

const CatalogPage = ({onClick}: CatalogPageProps): JSX.Element => {
  const cameras = useAppSelector(selectCameras);
  const isLoading = useAppSelector(selectIsCamerasDataLoading);
  const isError = useAppSelector(selectIsCamerasError);

  if (isLoading) {
    return <NotFoundPage title={TitlePlug.IsLoading} />;
  } else if (isError) {
    return <NotFoundPage />;
  } else {
    return (
      <>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <CatalogSection cameras={cameras} onClick={onClick} />
        </div>
      </>
    );
  }
};

export default CatalogPage;
