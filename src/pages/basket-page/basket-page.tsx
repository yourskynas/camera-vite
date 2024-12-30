import { nanoid } from '@reduxjs/toolkit';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectShoppingCart } from '../../store/main-process/selectors';
import { CameraType } from '../../types';
import { groupById } from '../../utils';
import { addToCart, changeIsClearCart, emptyBasket, removeFromCart, setErrorStatus, setPostStatus, updateCameraQuanity } from '../../store/main-process/main-process';
import useDynamicPricing from '../../hooks/use-dynamic-pricing';
import { useState } from 'react';
import { orderAction } from '../../store/api-actions';
import { selectIsOrderPosting } from '../../store/cameras-data/selectors';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constants';

type BasketItemProps = {
  camera: CameraType;
  count: number;
  onClick: (camera: CameraType) => void;
}

type BasketPageProps = {
  onClick: (camera: CameraType) => void;
}

const BasketItem = ({camera, count, onClick}: BasketItemProps) => {
  const [changedCount, setCount] = useState(count.toString());
  const dispatch = useAppDispatch();
  const {name: cameraName, vendorCode, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, category, level, price } = camera;
  const totalPrice = price * count;

  const handleNextButtonClick = () => {
    if (Number(changedCount) === 9) {
      return changedCount;
    }
    setCount((Number(changedCount) + 1).toString());
    dispatch(addToCart(camera));
  };

  const handlePrevButtonClick = () => {
    if (Number(changedCount) === 1) {
      return changedCount;
    }
    setCount((Number(changedCount) - 1).toString());
    dispatch(removeFromCart(camera.id));
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    const valueNumber = Number(evt.target.value);
    if (value === '') {
      setCount('');
      return;
    }
    if (isNaN(valueNumber)) {
      return;
    }
    if (valueNumber < 1) {
      setCount('1');
      dispatch(updateCameraQuanity({id: camera.id, targetQuanity: 1}));
    } else if (valueNumber > 9) {
      setCount('9');
      dispatch(updateCameraQuanity({id: camera.id, targetQuanity: 9}));
    } else {
      setCount(value);
      dispatch(updateCameraQuanity({id: camera.id, targetQuanity: valueNumber}));
    }
  };

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
        <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара" onClick={handlePrevButtonClick}>
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        <input type="number" id="counter1" value={changedCount} aria-label="количество товара" onChange={handleInputChange}/>
        <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара" onClick={handleNextButtonClick}>
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
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const basket: CameraType[] = useAppSelector(selectShoppingCart);
  const isOrderPosting = useAppSelector(selectIsOrderPosting);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const coupon = 'camera-333';
  const groupedById = groupById(basket);
  const basketItems = Object.values(groupedById);
  const { totalPrice, discountAmount, finalPrice } = useDynamicPricing(basket);

  const handleButtonSubmit = () => {
    setIsDisabled(!isDisabled);
    const allId = Object.keys(groupedById).map((item) => Number(item));
    dispatch(orderAction({camerasIds: allId, coupon}))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          setIsDisabled(!isDisabled);
          dispatch(emptyBasket());
          dispatch(setPostStatus(true));
          navigate(AppRoute.Catalog);
        } else if (response.meta.requestStatus === 'rejected') {
          dispatch(setErrorStatus(true));
          setIsDisabled(false);
        }
      });
  };

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
              <p className="basket__summary-item"><span className="basket__summary-text">Скидка:</span><span className="basket__summary-value basket__summary-value--bonus">{discountAmount.toLocaleString('ru')} ₽</span></p>
              <p className="basket__summary-item"><span className="basket__summary-text basket__summary-text--total">К оплате:</span><span className="basket__summary-value basket__summary-value--total">{finalPrice.toLocaleString('ru')} ₽</span></p>
              <button className="btn btn--purple" type="submit" onClick={handleButtonSubmit} disabled={basket.length === 0 || isDisabled}>{!isOrderPosting ? 'Оформить заказ' : 'Идет оформление заказа'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasketPage;

