import { nanoid } from '@reduxjs/toolkit';
import ProductCard from '../product-card/product-card';
import { CameraType } from '../../types';

type CatalogSectionProps = {
  onClick: (camera: CameraType) => void;
  cameras: CameraType[];
}

const CatalogSection = ({onClick, cameras}: CatalogSectionProps): JSX.Element => (
  <section className="catalog">
    <div className="container">
      <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
      <div className="page-content__columns">
        <div className="catalog__aside"><img src="img/banner.png" />
        </div>
        <div className="catalog__content">
          <div className="cards catalog__cards">
            {cameras.map((camera) => <ProductCard key={nanoid()} camera={camera} onClick={onClick} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CatalogSection;
