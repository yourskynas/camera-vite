type RateProps = {
  placeInContent: string;
}

const Rate = ({placeInContent}: RateProps): JSX.Element => (
  <div className={`rate ${placeInContent}`}>
    <svg width="17" height="16" aria-hidden="true">
      <use xlinkHref="#icon-full-star"></use>
    </svg>
    <svg width="17" height="16" aria-hidden="true">
      <use xlinkHref="#icon-full-star"></use>
    </svg>
    <svg width="17" height="16" aria-hidden="true">
      <use xlinkHref="#icon-full-star"></use>
    </svg>
    <svg width="17" height="16" aria-hidden="true">
      <use xlinkHref="#icon-full-star"></use>
    </svg>
    <svg width="17" height="16" aria-hidden="true">
      <use xlinkHref="#icon-star"></use>
    </svg>
    <p className="visually-hidden">Рейтинг: 4</p>
    {placeInContent !== 'review-card__rate' && (
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
    )}
  </div>
);

export default Rate;
