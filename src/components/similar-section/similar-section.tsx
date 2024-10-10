import { nanoid } from '@reduxjs/toolkit';
import ProductCard from '../product-card/product-card';
import { CameraType } from '../../types';

type SimilarSectionProps = {
  cameras: CameraType[];
  onClick: (camera: CameraType) => void;
}

const SimilarSection = ({cameras, onClick}: SimilarSectionProps):JSX.Element => (
  <div className="page-content__section">
    <section className="product-similar">
      <div className="container">
        <h2 className="title title&#45;&#45;h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <div className="product-similar__slider-list">
            {cameras.map((camera) => <ProductCard key={nanoid()} camera={camera} onClick={onClick} similarStyle={'is-active'} />)}
          </div>
          <button className="slider-controls slider-controls&#45;&#45;prev" type="button" aria-label="Предыдущий слайд" disabled>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button className="slider-controls slider-controls&#45;&#45;next" type="button" aria-label="Следующий слайд">
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default SimilarSection;

