import Rate from '../rate/rate';

const ReviewItem = (): JSX.Element => (
  <li className="review-card">
    <div className="review-card__head">
      <p className="title title--h4">Сергей Горский</p>
      <time className="review-card__data" dateTime="2022-04-13">13 апреля</time>
    </div>
    <Rate placeInContent="review-card__rate" />
    <ul className="review-card__list">
      <li className="item-list"><span className="item-list__title">Достоинства:</span>
        <p className="item-list__text">Надёжная, хорошо лежит в руке, необычно выглядит</p>
      </li>
      <li className="item-list"><span className="item-list__title">Недостатки:</span>
        <p className="item-list__text">Тяжеловата, сложно найти плёнку</p>
      </li>
      <li className="item-list"><span className="item-list__title">Комментарий:</span>
        <p className="item-list__text">Раз в полгода достаю из-под стекла, стираю пыль, заряжаю — работает как часы. Ни у кого из знакомых такой нет, все завидуют) Теперь это жемчужина моей коллекции, однозначно стоит своих денег!</p>
      </li>
    </ul>
  </li>
);

const Review = (): JSX.Element => (
  <section className="review-block">
    <div className="container">
      <div className="page-content__headed">
        <h2 className="title title--h3">Отзывы</h2>
        {/* <button className="btn" type="button">Оставить свой отзыв</button> */}
      </div>
      <ul className="review-block__list">
        <ReviewItem />
      </ul>
      <div className="review-block__buttons">
        <button className="btn btn--purple" type="button">Показать больше отзывов
        </button>
      </div>
    </div>
  </section>
);

export default Review;
