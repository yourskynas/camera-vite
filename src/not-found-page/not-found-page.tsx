import { Link } from 'react-router-dom';
import { AppRoute, TitlePlug } from '../constants';

type NotFoundPageProps = {
  title?: typeof TitlePlug[keyof typeof TitlePlug];
}

const NotFoundPage = ({title = TitlePlug.NotFound}: NotFoundPageProps): JSX.Element => (
  <div style={{display: 'flex', alignItems: 'center', marginTop: '5%', flexDirection: 'column'}}>
    <div><h1>{title}</h1></div>
    {title === TitlePlug.NotFound && (
      <div>
        <Link className="btn btn--purple product-card__btn" type="button" to={AppRoute.Catalog}>Перейти на главную</Link>
      </div>
    )}
  </div>
);

export default NotFoundPage;
