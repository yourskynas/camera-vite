import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Rate from '../../components/rate/rate';
import Review from '../../components/review/review';
import SimilarSection from '../../components/similar-section/similar-section';
import { cameras } from '../../mocks/cameras';
import { CameraType } from '../../types';
import { useEffect, useState } from 'react';
import Button from '../../components/button/button';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCameraAction, fetchSimilarAction } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { selectCamera, selectIsCameraDataLoading, selectIsCameraError, selectSimilar } from '../../store/cameras-data/selectors';
import NotFoundPage from '../not-found-page/not-found-page';
import { TitlePlug } from '../../constants';
import { changeIsAddToCart } from '../../store/main-process/main-process';

type ProductPageProps = {
  onClick: (camera: CameraType) => void;
}

const ProductPage = ({onClick}: ProductPageProps): JSX.Element => {
  const [isActiveDescription, setIsActiveDescription] = useState<boolean>(true);
  const [isActiveCharacteristics, setIsActiveCharacteristics] = useState<boolean>(false);
  const params = useParams();
  const cameraId = params.id || '';

  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchCameraAction(cameraId))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            dispatch(fetchSimilarAction(cameraId));
          }
        });
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, cameraId]);

  const camera = useSelector(selectCamera);
  const isLoading = useAppSelector(selectIsCameraDataLoading);
  const isError = useAppSelector(selectIsCameraError);
  const similarCameras = useSelector(selectSimilar);

  const activeDescription = isActiveDescription ? 'is-active' : '';
  const activeCharacteristics = isActiveCharacteristics ? 'is-active' : '';

  const handleButtonClick = () => {
    if (camera) {
      onClick(camera);
    }
    dispatch(changeIsAddToCart(true));
  };

  const handleCharacteristicsButtonClick = () => {
    setIsActiveDescription(false);
    setIsActiveCharacteristics(true);
  };

  const handleDescriptionButtonClick = () => {
    setIsActiveDescription(true);
    setIsActiveCharacteristics(false);
  };

  if (isLoading) {
    return <NotFoundPage title={TitlePlug.IsLoading} />;
  } else if (isError) {
    return <NotFoundPage />;
  } else {
    return (camera !== null) ? (
      <div className="page-content">
        <Breadcrumbs cameraName={camera.name} />
        <div className="page-content__section">
          <section className="product">
            <div className="container">
              <div className="product__img">
                <picture>
                  <source type="image/webp" srcSet={`/${camera.previewImgWebp}, ${camera.previewImgWebp2x} 2x`} />
                  <img src={camera.previewImg} srcSet={`/${camera.previewImg2x} 2x`} width="560" height="480" alt={camera.name} />
                </picture>
              </div>
              <div className="product__content">
                <h1 className="title title--h3">{camera.name}</h1>
                <Rate placeInContent='product__rate' />
                <p className="product__price"><span className="visually-hidden">Цена:</span>{(camera.price).toLocaleString('ru')} ₽</p>
                <button className="btn btn--purple" type="button" onClick={handleButtonClick}>
                  <svg width="24" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-add-basket"></use>
                  </svg>Добавить в корзину
                </button>
                <div className="tabs product__tabs">
                  <div className="tabs__controls product__tabs-controls">
                    <Button activeElement={activeCharacteristics} onClick={handleCharacteristicsButtonClick} textElement='Характеристики' />
                    <Button activeElement={activeDescription} onClick={handleDescriptionButtonClick} textElement='Описание' />
                  </div>
                  <div className="tabs__content">
                    <div className={`tabs__element ${activeCharacteristics}`}>
                      <ul className="product__tabs-list">
                        <li className="item-list"><span className="item-list__title">Артикул:</span>
                          <p className="item-list__text"> {camera.vendorCode}</p>
                        </li>
                        <li className="item-list"><span className="item-list__title">Категория:</span>
                          <p className="item-list__text">{camera.category}</p>
                        </li>
                        <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                          <p className="item-list__text">{camera.type}</p>
                        </li>
                        <li className="item-list"><span className="item-list__title">Уровень:</span>
                          <p className="item-list__text">{camera.level}</p>
                        </li>
                      </ul>
                    </div>
                    <div className={`tabs__element ${activeDescription}`}>
                      <div className="product__tabs-text">
                        <p>{camera.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {cameras && <SimilarSection cameras={similarCameras} onClick={onClick} />}
        <div className="page-content__section">
          <Review />
        </div>
      </div>
    ) : <NotFoundPage />;
  }
};

export default ProductPage;
