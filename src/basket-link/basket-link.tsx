import { useAppSelector } from '../hooks';
import { selectShoppingCart } from '../store/main-process/selectors';

const BasketLink = () => {
  const basket = useAppSelector(selectShoppingCart);
  return (
    <a className="header__basket-link" href="#">
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      {basket.length > 0 && <span className="header__basket-count">{basket.length}</span>}
    </a>
  );
};

export default BasketLink;

