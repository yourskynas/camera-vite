import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type LogoProps = {
  position: 'header' | 'footer';
}

const Logo = ({position}: LogoProps): JSX.Element => {
  const link = position === 'footer' ? '#icon-logo-mono' : '#icon-logo';

  return (
    <Link className={`${position}__logo`} to={AppRoute.Catalog} aria-label="Переход на главную">
      <svg width="100" height="36" aria-hidden="true">
        <use xlinkHref={link}></use>
      </svg>
    </Link>
  );
};

export default Logo;

