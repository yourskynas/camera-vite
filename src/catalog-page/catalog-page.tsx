import Banner from '../components/banner/banner';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import CatalogSection from '../components/catalog-section/catalog-section';
import { Direction, SortType, TitlePlug } from '../constants';
import { useAppSelector } from '../hooks';
import NotFoundPage from '../not-found-page/not-found-page';
import { selectCameras, selectIsCamerasDataLoading, selectIsCamerasError } from '../store/cameras-data/selectors';
import { selectDirection, selectSortType } from '../store/main-process/selectors';
import { CameraType } from '../types';

type CatalogPageProps = {
  onClick: (camera: CameraType) => void;
}

const CatalogPage = ({onClick}: CatalogPageProps): JSX.Element => {
  const cameras = useAppSelector(selectCameras);
  const isLoading = useAppSelector(selectIsCamerasDataLoading);
  const isError = useAppSelector(selectIsCamerasError);
  const sortingDirection = useAppSelector(selectDirection);
  const sortingType = useAppSelector(selectSortType);

  const sortCameras = (items: CameraType[], key1: string, key2: string): CameraType[] => {
    const sortingKey: keyof CameraType = key1 === SortType.ByPrice ? 'price' : 'rating';
    return items.toSorted((a, b) => {
      const comparision = a[sortingKey] - b[sortingKey];
      return key2 === Direction.Up ? comparision : -comparision;
    });
  };

  const sortedCameras = sortCameras(cameras, sortingType, sortingDirection);

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
          <CatalogSection cameras={sortedCameras} onClick={onClick} />
        </div>
      </>
    );
  }
};

export default CatalogPage;
