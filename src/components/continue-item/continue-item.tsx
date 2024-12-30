import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { changeIsContinue } from '../../store/main-process/main-process';

type ContinueItemProps = {
  onClick: (camera: null) => void;
}

const ContinueItem = ({onClick}: ContinueItemProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleModalClose = () => {
    onClick(null);
    dispatch(changeIsContinue(false));
  };

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={handleModalClose}></div>
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon" width="86" height="80" aria-hidden="true">
            <use xlinkHref="#icon-success"></use>
          </svg>
          <div className="modal__buttons" onClick={handleModalClose}>
            <Link className="btn btn--transparent modal__btn" to={AppRoute.Catalog}>Продолжить покупки</Link>
            <button className="btn btn--purple modal__btn modal__btn--fit-width" onClick={() => navigate(AppRoute.Basket)}>Перейти в корзину</button>
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

export default ContinueItem;
