type LogoProps = {
  position: 'header' | 'footer';
}

const Logo = ({position}: LogoProps): JSX.Element => {
  const link = position === 'footer' ? '#icon-logo-mono' : '#icon-logo';
  return (
    <a className={`${position}__logo`} href="index.html" aria-label="Переход на главную">
      <svg width="100" height="36" aria-hidden="true">
        <use xlinkHref={link}></use>
      </svg>
    </a>
  );
};

export default Logo;

