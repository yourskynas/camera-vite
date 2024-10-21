import { nanoid } from '@reduxjs/toolkit';
import Rate from '../rate/rate';
import { ReviewType } from '../../types';
import { humanizingDate } from '../../utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { fetchReviewsAction } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { selectReviews } from '../../store/cameras-data/selectors';

type ReviewItemProps = {
  review: ReviewType;
}

export const ReviewItem = ({review}: ReviewItemProps): JSX.Element => {
  const { userName, advantage, disadvantage, review: reviewText, rating, createAt } = review;
  const formattedDate = humanizingDate(createAt);
  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">{formattedDate}</time>
      </div>
      {rating && <Rate placeInContent="review-card__rate" rating={rating} />}
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
  const dispatch = useAppDispatch();

  const STEP = 3;
  const startCount = 0;
  const params = useParams();
  const cameraId = params.id || '';

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchReviewsAction(cameraId));
    }
    return () => {
      isMounted = false;
      setEndCount(3);
    };
  }, [dispatch, cameraId]);

  const reviews = useSelector(selectReviews);

  const sortedReviews = [...reviews].sort((first, second) => new Date(second.createAt).getTime() - new Date(first.createAt).getTime())
    .slice(startCount, endCount);

  const showNextReviews = () => sortedReviews.slice(startCount, endCount);

  const isHidden = reviews.length <= STEP || reviews.length <= endCount;

  const handleButtonClick = () => {
    setEndCount(endCount + STEP);
    showNextReviews();
  };

  return (
    <section className="review-block" data-testid="review">
      <div className="container">
        {sortedReviews.length !== 0 && (
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
          </div>
        )}
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
