import { useAppDispatch } from '../../hooks';
import { addToCart, changeIsAddToCart, changeIsContinue } from '../../store/main-process/main-process';
import { CameraType } from '../../types';

type AddCameraProps = {
  activeProduct: CameraType;
  onClick: (camera: null) => void;
}

const AddCamera = ({activeProduct, onClick}: AddCameraProps): JSX.Element => {
  const { name, vendorCode, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, category, level, price } = activeProduct;
  const dispatch = useAppDispatch();

  const handleModalClose = () => {
    onClick(null);
  };

  const handleButtonClick = () => {
    dispatch(addToCart(activeProduct));
    dispatch(changeIsContinue(true));
    dispatch(changeIsAddToCart(false));
  };

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={handleModalClose}></div>
        <div className="modal__content">
          <p className="title title--h4">Добавить товар в корзину</p>
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
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул:</span>
                  <span className="basket-item__number">{vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{category}</li>
                <li className="basket-item__list-item">{level} уровень</li>
              </ul>
              <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru')} ₽</p>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={handleButtonClick}>
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
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

export default AddCamera;
