import { useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { orderAction } from '../../store/api-actions';
import { CameraType } from '../../types';

const STYLE_ERROR = {
  color: 'red',
  marginTop: 0,
  fontSize: 12,
  fontWeight: 300
};

type ErrorItemProps = {
  message: string;
}

type CallItemProps = {
  activeProduct: CameraType;
  onClick: (camera: null) => void;
}

type PhoneType = string | undefined;

const ErrorItem = ({message}: ErrorItemProps): JSX.Element => (
  <div>
    <p style={STYLE_ERROR}>{message}</p>
  </div>
);

const CallItem = ({activeProduct, onClick}: CallItemProps): JSX.Element => {
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [formatedPhone, setFormatedPhone] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { name, vendorCode, previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, category, level, price, id } = activeProduct;

  const closePopup = () => {
    onClick(null);
  };

  const convertPhone = (phone: PhoneType) => {
    let newPhone = '';
    if (phone) {
      newPhone = `+7${phone.split(/[^0-9]/g).join('').slice(1,11)}`;
      setFormatedPhone(newPhone);
    }

  };

  const validatePhone = (phone: PhoneType) => {
    const digitRegex = /^(\+7|8)(\s|\()?\d{3}(\s|\))?\d{3}(\s|-)?\d{2}(\s|-)?\d{2}$/;
    const message = 'Введите телефон в формате: +7(9XX)XXX-XX-XX или 89XXXXXXXXX';

    setIsError(false);
    setErrorText(null);

    if (phone && !digitRegex.test(phone)) {
      setIsError(true);
      return setErrorText(message);
    }

    convertPhone(phone);
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === 'Escape') {
      closePopup();
    }
  };

  const handleInputChange = (phone: PhoneType) => {
    validatePhone(phone);
  };

  const handleButtonClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    setIsSubmit(true);
    if (formatedPhone) {
      dispatch(orderAction({
        camerasIds: [id],
        coupon: null,
        tel: formatedPhone
      })).then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          setIsSubmit(false);
          closePopup();
        }
      }).catch(() => {
        setIsSubmit(false);
      });
    }
  };

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={closePopup}></div>
        <div className="modal__content">
          <p className="title title--h4">Свяжитесь со мной</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" srcSet={`/${previewImgWebp}, ${previewImgWebp2x} + '2x'`} />
                <img src={previewImg} srcSet={`/${previewImg2x} + '2x'`} width="140" height="120" alt={name} />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{category}</li>
                <li className="basket-item__list-item">{level} уровень</li>
              </ul>
              <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru')} ₽</p>
            </div>
          </div>
          <div className="custom-input form-review__item">
            <label>
              <span className="custom-input__label">Телефон
                <svg width="9" height="9" aria-hidden="true">
                  <use xlinkHref="#icon-snowflake"></use>
                </svg>
              </span>
              <input type="tel" name="user-tel" placeholder="Введите ваш номер" ref={phoneRef} required onKeyDown={(evt) => handleKeyDown(evt)} onChange={() => handleInputChange(phoneRef.current?.value)} data-testid="phone" />
            </label>
            <p className="custom-input__error">Нужно указать номер</p>
          </div>
          {errorText !== null && <ErrorItem message={errorText} />}
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" onClick={(evt) => handleButtonClick(evt)} type="button" disabled={isError || isSubmit}>
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Заказать
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={closePopup}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallItem;

