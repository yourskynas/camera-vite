import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Footer from '../footer/footer';
import Header from '../header/header';
import { camera } from '../mocks/camera';
import Rate from '../rate/rate';
import Review from '../review/review';

const ProductPage = (): JSX.Element => (
  <div className="wrapper">
    <Header />
    <main>
      <div className="page-content">
        <Breadcrumbs cameraName={camera.name} />
        <div className="page-content__section">
          <section className="product">
            <div className="container">
              <div className="product__img">
                <picture>
                  <source type="image/webp" srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x" />
                  <img src="img/content/das-auge.jpg" srcSet="img/content/das-auge@2x.jpg 2x" width="560" height="480" alt="Ретрокамера Das Auge IV" />
                </picture>
              </div>
              <div className="product__content">
                <h1 className="title title--h3">{camera.name}</h1>
                <Rate placeInContent='product__rate' />
                <p className="product__price"><span className="visually-hidden">Цена:</span>{camera.price} ₽</p>
                <button className="btn btn--purple" type="button">
                  <svg width="24" height="16" aria-hidden="true">
                    <use xlinkHref="#icon-add-basket"></use>
                  </svg>Добавить в корзину
                </button>
                <div className="tabs product__tabs">
                  <div className="tabs__controls product__tabs-controls">
                    <button className="tabs__control" type="button">Характеристики</button>
                    <button className="tabs__control is-active" type="button">Описание</button>
                  </div>
                  <div className="tabs__content">
                    <div className="tabs__element">
                      <ul className="product__tabs-list">
                        <li className="item-list"><span className="item-list__title">Артикул:</span>
                          <p className="item-list__text"> {camera.vendorCode}</p>
                        </li>
                        <li className="item-list"><span className="item-list__title">Категория:</span>
                          <p className="item-list__text">{camera.category}</p>
                        </li>
                        <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                          <p className="item-list__text">{camera.type}</p>
                        </li>
                        <li className="item-list"><span className="item-list__title">Уровень:</span>
                          <p className="item-list__text">{camera.level}</p>
                        </li>
                      </ul>
                    </div>
                    <div className="tabs__element is-active">
                      <div className="product__tabs-text">
                        <p>{camera.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="page-content__section">
            <section className="product-similar">
              <div className="container">
                <h2 className="title title&#45;&#45;h3">Похожие товары</h2>
                <div className="product-similar__slider">
                  <div className="product-similar__slider-list">
                    <div className="product-card is-active">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/fast-shot.webp, img/content/fast-shot@2x.webp 2x" />
                          <img src="img/content/fast-shot.jpg" srcSet="img/content/fast-shot@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <Rate placeInContent="product-card__rate" />
                        <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/instaprinter.webp, img/content/instaprinter@2x.webp 2x" />
                          <img src="img/content/instaprinter.jpg" srcSet="img/content/instaprinter@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <Rate placeInContent="product-card__rate" />
                        <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>8 430 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn&#45;&#45;purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn&#45;&#45;transparent" href="#">Подробнее
                        </a>
                      </div>
                    </div>
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
          </div> */}
        <div className="page-content__section">
          <Review />
        </div>
      </div>
    </main>
    <a className="up-btn" href="#header">
      <svg width="12" height="18" aria-hidden="true">
        <use xlinkHref="#icon-arrow2"></use>
      </svg>
    </a>
    <Footer />
  </div>
);

export default ProductPage;
