import { nanoid } from '@reduxjs/toolkit';
import { reviews } from '../../mocks/reviews';
import Rate from '../rate/rate';
import { ReviewType } from '../../types';
import { humanizingDate } from '../../utils';
import { useState } from 'react';

type ReviewItemProps = {
  review: ReviewType;
}

const ReviewItem = ({review}: ReviewItemProps): JSX.Element => {
  const { userName, advantage, disadvantage, review: reviewText, rating, createAt } = review;
  const formattedDate = humanizingDate(createAt);
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">{formattedDate}</time>
      </div>
      <Rate placeInContent="review-card__rate" rating={rating} />
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{reviewText}</p>
        </li>
      </ul>
    </li>
  );
};

const Review = (): JSX.Element => {
  const [endCount, setEndCount] = useState<number>(3);

  const STEP = 3;
  const startCount = 0;

  const sortedReviews = reviews.slice(startCount, endCount)
    .sort((first, second) => new Date(second.createAt).getTime() - new Date(first.createAt).getTime());

  const showNextReviews = () => sortedReviews.slice(startCount, endCount);

  const isHidden = reviews.length <= STEP || sortedReviews.length < endCount;

  const handleButtonClick = () => {
    setEndCount(endCount + STEP);
    showNextReviews();
  };

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          {/* <button className="btn" type="button">Оставить свой отзыв</button> */}
        </div>
        <ul className="review-block__list">
          {sortedReviews.map((review) => <ReviewItem key={nanoid()} review={review} />)}
        </ul>
        <div className="review-block__buttons">
          {!isHidden && (
            <button className="btn btn--purple" type="button" onClick={handleButtonClick}>Показать больше отзывов
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Review;
