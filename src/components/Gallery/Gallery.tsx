import styles from '../../css/Gallery/Gallery.module.css';
import logo from '../../assets/galleryLogo.svg';
import { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/config";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

interface Postit {
  content: string;
  img: string;
  name: string;
}

const Gallery: React.FC = () => {
  const [data, setData] = useState<Postit[]>([]);

  useEffect(() => {
    listenForChanges();
  }, []);

  const listenForChanges = () => {
    const dbRef = ref(db, "/postit");
    onValue(dbRef, (DataSnapshot) => {
      const data = DataSnapshot.val();
      setData(Object.values(data));
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <p className={styles.home}>HOME</p>
        <p className={styles.write}>포스트잇 작성하기</p>
      </div>
      <img src={logo} className={styles.title} />
      <p className={styles.content}>여러분들의 소중한 마음이 담긴 포스트잇을 모아놓은 공간입니다.</p>

      <Swiper
        slidesPerView={5}
        grid={{
          rows: 2,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        
        className={styles.slider}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={styles.post}>
            <div className={styles.img}>
              <img src={item.img} className={styles.img1} />
              <p className={styles.postContent}>{item.content}</p>
            </div>
            <p className={styles.name}>{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
