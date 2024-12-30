import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeIsClearCart, clearCart } from '../../store/main-process/main-process';
import { CameraType } from '../../types';
import { AppRoute } from '../../constants';
import { selectShoppingCart } from '../../store/main-process/selectors';

type ClearBasketProps = {
  activeProduct: CameraType;
  onClick: (camera: null) => void;
}

const ClearBasket = ({activeProduct, onClick}: ClearBasketProps) => {
  const basket: CameraType[] = useAppSelector(selectShoppingCart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name, vendorCode, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, category, level } = activeProduct;

  const handleModalClose = () => {
    dispatch(changeIsClearCart(false));
    onClick(null);
  };

  const handleButtonClear = () => {
    dispatch(clearCart(activeProduct.id));
    dispatch(changeIsClearCart(false));
    onClick(null);
    if (basket.length === 1) {
      navigate(AppRoute.Catalog);
    }
  };

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={handleModalClose}></div>
        <div className="modal__content">
          <p className="title title--h4">Удалить этот товар?</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" srcSet={`/${previewImgWebp}, ${previewImgWebp2x} 2x`} />
                <img src={previewImg} srcSet={`/${previewImg2x} 2x`} width="140" height="120" alt={name} />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{category} фотокамера</li>
                <li className="basket-item__list-item">{level} уровень</li>
              </ul>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--half-width" type="button" onClick={handleButtonClear}>Удалить
            </button>
            <Link className="btn btn--transparent modal__btn modal__btn--half-width" to={AppRoute.Catalog} onClick={handleModalClose}>Продолжить покупки
            </Link>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleModalClose}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearBasket;
