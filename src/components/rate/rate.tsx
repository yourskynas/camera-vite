import { nanoid } from '@reduxjs/toolkit';
import { createRatingList } from '../../utils';
import { RatingType } from '../../types';

type RateProps = {
  placeInContent: string;
  rating?: RatingType;
  reviewCount?: number;
}

type RateItemProps = {
  rating: boolean;
}

const RateItem = ({rating}: RateItemProps): JSX.Element => {
  const isFullStar = rating ? '-full' : '';
  return (
    <svg width="17" height="16" aria-hidden='true'>
      <use xlinkHref={`#icon${isFullStar}-star`}></use>
    </svg>
  );
};

const Rate = ({placeInContent, rating, reviewCount}: RateProps): JSX.Element => {
  const ratingList = rating && createRatingList(rating);
  return (
    <div className={`rate ${placeInContent}`}>
      {ratingList && ratingList.map((value) => <RateItem key={nanoid()} rating={value} />)}
      <p className="visually-hidden">Рейтинг: {rating}</p>
      {placeInContent !== 'review-card__rate' && reviewCount && (
        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
      )}
    </div>
  );
};

export default Rate;
