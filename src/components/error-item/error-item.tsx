import { useAppDispatch } from '../../hooks';
import { setErrorStatus } from '../../store/main-process/main-process';

const ErrorItem = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setErrorStatus(false));
  };
  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Возникла ошибка</p>
          <svg className="modal__icon" style={{transform: 'rotate(180deg)'}} width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"></use>
          </svg>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={handleButtonClick}>Вернуться в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorItem;
