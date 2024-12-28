import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { selectShoppingCart } from '../store/main-process/selectors';
import { AppRoute } from '../constants';

const BasketLink = () => {
  const basket = useAppSelector(selectShoppingCart);
  return (
    <Link className="header__basket-link" to={basket.length > 0 ? AppRoute.Basket : AppRoute.Catalog}>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      {basket.length > 0 && <span className="header__basket-count">{basket.length}</span>}
    </Link>
  );
};

export default BasketLink;

