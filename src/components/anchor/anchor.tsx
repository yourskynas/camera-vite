const Anchor = (): JSX.Element => (
  <a className="up-btn" href="#header" data-testid="anchor-link">
    <svg width="12" height="18" aria-hidden="true">
      <use xlinkHref="#icon-arrow2"></use>
    </svg>
  </a>
);

export default Anchor;
