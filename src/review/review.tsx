import { nanoid } from '@reduxjs/toolkit';
import { reviews } from '../mocks/reviews';
import Rate from '../rate/rate';
import { ReviewType } from '../types';

type ReviewItemProps = {
  review: ReviewType;
}

const ReviewItem = ({review}: ReviewItemProps): JSX.Element => {
  const { userName, advantage, disadvantage, review: reviewText, rating } = review;
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">13 апреля</time>
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

const Review = (): JSX.Element => (
  <section className="review-block">
    <div className="container">
      <div className="page-content__headed">
        <h2 className="title title--h3">Отзывы</h2>
        {/* <button className="btn" type="button">Оставить свой отзыв</button> */}
      </div>
      <ul className="review-block__list">
        {reviews.map((review) => <ReviewItem key={nanoid()} review={review} />)}
      </ul>
      <div className="review-block__buttons">
        <button className="btn btn--purple" type="button">Показать больше отзывов
        </button>
      </div>
    </div>
  </section>
);

export default Review;
