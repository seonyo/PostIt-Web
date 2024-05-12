import styles from '../../css/Gallery/Gallery.module.css'
import Logo from '../../assets/galleryLogo.svg'
import back from '../../assets/galleryBackground.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <img src={back} className={styles.back} />
      <div className={styles.nav}>
        <p className={styles.home}>HOME</p>
        <p className={styles.write}>포스트잇 작성하기</p>
      </div>
      <img src={Logo} className={styles.Logo} />
      <p className={styles.content}>여러분들의 소중한 마음이 담긴 포스트잇을 모아놓은 공간입니다.</p>

      <Swiper
        style={{height:'1062px'}}
        className={styles.swiper}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
