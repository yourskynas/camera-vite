import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { promo } from '../../mocks/promo';
import { nanoid } from '@reduxjs/toolkit';
import { PromoType } from '../../types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type BannerItemType = {
  promoItem: PromoType;
}

const BannerItem = ({promoItem}: BannerItemType): JSX.Element => (
  <div className="banner">
    <picture>
      <source type="image/webp" srcSet={`${promoItem.previewImgWebp}, ${promoItem.previewImgWebp2x} 2x`} />
      <img src={promoItem.previewImg} srcSet={`${promoItem.previewImg2x} 2x`} width="1280" height="280" alt={promoItem.name} />
    </picture>
    <p className="banner__info">
      <span className="banner__message">Новинка!</span>
      <span className="title title--h1">{promoItem.name}</span>
      <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
      <Link className="btn" to={AppRoute.Camera}>Подробнее</Link>
    </p>
  </div>
);

const Banner = (): JSX.Element => (
  <Swiper
    spaceBetween={30}
    autoplay={{
      delay: 3000,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination]}
    className="mySwiper"
  >
    {promo.map((promoItem) => <SwiperSlide key={nanoid()}><BannerItem promoItem={promoItem} /></SwiperSlide>)}
  </Swiper>
);

export default Banner;
