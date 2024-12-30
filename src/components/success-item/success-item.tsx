import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setPostStatus } from '../../store/main-process/main-process';
import { AppRoute } from '../../constants';

const SuccessItem = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleModalClose = () => {
    dispatch(setPostStatus(false));
  };
  const handleButtonClick = () => {
    navigate(AppRoute.Catalog);
    dispatch(setPostStatus(false));
  };
  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={handleModalClose}></div>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за покупку</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"></use>
          </svg>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={handleButtonClick}>Вернуться к покупкам
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

export default SuccessItem;
