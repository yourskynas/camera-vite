import { nanoid } from '@reduxjs/toolkit';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectShoppingCart } from '../../store/main-process/selectors';
import { CameraType } from '../../types';
import { groupById } from '../../utils';
import { changeIsClearCart } from '../../store/main-process/main-process';

type BasketItemProps = {
  camera: CameraType;
  count: number;
  onClick: (camera: CameraType) => void;
}

type BasketPageProps = {
  onClick: (camera: CameraType) => void;
}

const BasketItem = ({camera, count, onClick}: BasketItemProps) => {
  const dispatch = useAppDispatch();
  const {name: cameraName, vendorCode, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, category, level, price } = camera;
  const totalPrice = price * count;

  const handleButtonClick = () => {
    onClick(camera);
    dispatch(changeIsClearCart(true));
  };
  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp}, ${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`/${previewImg2x} 2x`} width="140" height="120" alt={cameraName}/>
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{cameraName}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span>
            <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{category}</li>
          <li className="basket-item__list-item">{level} уровень</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru')} ₽</p>
      <div className="quantity">
        <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара">
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        <input type="number" id="counter1" defaultValue={count} min="1" max="9" aria-label="количество товара"/>
        <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара">
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{totalPrice.toLocaleString('ru')} ₽</div>
      <button className="cross-btn" type="button" aria-label="Удалить товар" onClick={handleButtonClick}>
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </li>
  );
};

const BasketPage = ({onClick}: BasketPageProps) => {
  const basket: CameraType[] = useAppSelector(selectShoppingCart);

  const groupedById = groupById(basket);
  const basketItems = Object.values(groupedById);
  const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page-content">
      <Breadcrumbs cameraName='Корзина' />
      <section className="basket">
        <div className="container">
          <h1 className="title title--h2">Корзина</h1>
          <ul className="basket__list">
            {basketItems && basketItems.map((item) => <BasketItem key={nanoid()} camera={item[0]} count={item.length} onClick={onClick} />)}
          </ul>
          <div className="basket__summary">
            <div className="basket__promo">
              <p className="title title&#45;&#45;h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
              <div className="basket-form">
                <form action="#">
                  <div className="custom-input">
                    <label><span className="custom-input__label">Промокод</span>
                      <input type="text" name="promo" placeholder="Введите промокод"/>
                    </label>
                    <p className="custom-input__error">Промокод неверный</p>
                    <p className="custom-input__success">Промокод принят!</p>
                  </div>
                  <button className="btn" type="submit">Применить
                  </button>
                </form>
              </div>
            </div>
            <div className="basket__summary-order">
              <p className="basket__summary-item"><span className="basket__summary-text">Всего:</span><span className="basket__summary-value">{totalPrice.toLocaleString('ru')} ₽</span></p>
              <p className="basket__summary-item"><span className="basket__summary-text">Скидка:</span><span className="basket__summary-value basket__summary-value--bonus">0 ₽</span></p>
              <p className="basket__summary-item"><span className="basket__summary-text basket__summary-text--total">К оплате:</span><span className="basket__summary-value basket__summary-value--total">111 390 ₽</span></p>
              <button className="btn btn--purple" type="submit">Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasketPage;

