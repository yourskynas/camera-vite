import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { nanoid } from '@reduxjs/toolkit';
import { PromoType } from '../../types';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useSelector } from 'react-redux';
import { selectPromo } from '../../store/cameras-data/selectors';
import { fetchPromoAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';

type BannerItemType = {
  promoItem: PromoType;
}

export const BannerItem = ({promoItem}: BannerItemType): JSX.Element => (
  <div className="banner">
    <picture>
      <source type="image/webp" srcSet={`${promoItem.previewImgWebp}, ${promoItem.previewImgWebp2x} 2x`} />
      <img src={promoItem.previewImg} srcSet={`${promoItem.previewImg2x} 2x`} width="1280" height="280" alt={promoItem.name} />
    </picture>
    <p className="banner__info">
      <span className="banner__message">Новинка!</span>
      <span className="title title--h1">{promoItem.name}</span>
      <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
      <Link className="btn" to={generatePath(AppRoute.Camera, { id: (promoItem.id).toString() })}>Подробнее</Link>
    </p>
  </div>
);

const Banner = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchPromoAction());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const promo = useSelector(selectPromo);
  return (
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
};

export default Banner;
