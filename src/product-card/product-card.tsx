import { Link } from 'react-router-dom';
import Rate from '../rate/rate';
import { CameraType } from '../types';
import { AppRoute } from '../constants';

type ProductCardProps = {
  camera: CameraType;
  onClick: (camera: CameraType) => void;
}

const ProductCard = ({camera, onClick}: ProductCardProps): JSX.Element => (
  <div className="product-card">
    <div className="product-card__img">
      <picture>
        <source type="image/webp" srcSet={`${camera.previewImgWebp + camera.previewImgWebp2x} + '2x'`} />
        <img src={camera.previewImg} srcSet={`${camera.previewImg2x} + '2x'`} width="280" height="240" alt={camera.name} />
      </picture>
    </div>
    <div className="product-card__info">
      <Rate placeInContent="product-card__rate" rating={camera.rating} reviewCount={camera.reviewCount} />
      <p className="product-card__title">{camera.name}</p>
      <p className="product-card__price"><span className="visually-hidden">Цена:</span>{camera.price} ₽
      </p>
    </div>
    <div className="product-card__buttons">
      <button className="btn btn--purple product-card__btn" type="button" onClick={() => onClick(camera)}>Купить
      </button>
      <Link className="btn btn--transparent" to={AppRoute.Camera}>Подробнее
      </Link>
    </div>
  </div>
);

export default ProductCard;
