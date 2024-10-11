import { nanoid } from '@reduxjs/toolkit';
import ProductCard from '../product-card/product-card';
import { CameraType } from '../../types';
import { useState } from 'react';

type SimilarSectionProps = {
  cameras: CameraType[];
  onClick: (camera: CameraType) => void;
}

const STEP = 3;

const SimilarSection = ({cameras, onClick}: SimilarSectionProps):JSX.Element => {
  const [startCount, setStartCount] = useState<number>(0);
  const [endCount, setEndCount] = useState<number>(3);

  const allCards: CameraType[] = cameras;
  let slicedCards: CameraType[] = [];

  const isDisabledForwardButton = endCount >= allCards.length || allCards.length <= STEP;
  const isDisabledBackButton = startCount === 0;

  const showNextCards = () => {
    slicedCards = allCards.slice(startCount, endCount);
    return slicedCards;
  };

  showNextCards();

  const handleForwardButtonClick = () => {
    setStartCount(startCount + STEP);
    setEndCount(endCount + STEP);
    showNextCards();
  };

  const handleBackButtonClick = () => {
    setStartCount(startCount - STEP);
    setEndCount(endCount - STEP);
    showNextCards();
  };

  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title&#45;&#45;h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {slicedCards.map((card) => <ProductCard key={nanoid()} camera={card} onClick={onClick} similarStyle={'is-active'} />)}
            </div>
            <button className="slider-controls slider-controls&#45;&#45;prev" type="button" aria-label="Предыдущий слайд" onMouseEnter={handleBackButtonClick} disabled={isDisabledBackButton}>
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
            <button className="slider-controls slider-controls&#45;&#45;next" type="button" aria-label="Следующий слайд" onMouseEnter={handleForwardButtonClick} disabled={isDisabledForwardButton}>
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimilarSection;
