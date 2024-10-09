import { Link } from 'react-router-dom';
import { AppRoute } from '../constants';

const NotFoundPage = (): JSX.Element => (
  <div style={{display: 'flex', alignItems: 'center', marginTop: '5%', flexDirection: 'column'}}>
    <div><h1>404 Not Found</h1></div>
    <div><Link className="btn btn--purple product-card__btn" type="button" to={AppRoute.Catalog}>Перейти на главную</Link></div>
  </div>
);

export default NotFoundPage;
