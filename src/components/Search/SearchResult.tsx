import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/config";
import styles from '../../css/Search/searchResult.module.css';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface Postit {
    id: string;
    img: string;
    content: string;
    name: string;
    timestamp: string;
}

const SearchResult: React.FC = () => {
    const nav = useNavigate()
    const location = useLocation();
    const { teamName } = location.state || {};
    const [posts, setPosts] = useState<Postit[]>([]);
    const [data, setData] = useState<Postit[]>([]);

    const handleHome = () => {
        nav('/')
    }
    const handleGallery = () => {
        nav('/gallery')
    }

    const handleWrite = () => {
        nav('/qr')
    }
    useEffect(() => {
        listenForChanges();
    }, []);

    const listenForChanges = () => {
        const postitRef = ref(db, '/postit');

        onValue(postitRef, (snapshot) => {
            const postits: Postit[] = [];
            const data = snapshot.val();

            if (data) {
                Object.keys(data)
                    .sort((a, b) => b.localeCompare(a)) 
                    .forEach((key) => {
                        const { img, content, name, timestamp } = data[key];
                        if (name === teamName) {
                            postits.push({ id: key, img, content, name, timestamp });
                        }
                    });
                setData(postits);
            } else {
                setData([]);
            }
        });
    };


    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <p className={styles.home} onClick={handleHome}>HOME</p>
                <p className={styles.gallery} onClick={handleGallery}>갤러리</p>
                <p className={styles.write} onClick={handleWrite}>작성하러가기</p>
            </div>
            <h1 className={styles.teamName}>"{teamName}" GALLERY</h1>
            <div className={styles.posts}>
                <Swiper
                    slidesPerView={5}
                    grid={{
                        rows: 2
                    }}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                        type: 'bullets'
                    }}
                    autoplay={{
                        delay: 2200,
                        disableOnInteraction: false,
                    }}
                    modules={[Grid, Pagination, Autoplay]}
                    className={styles.slider}
                >

                    {data.map((post, index) => (
                        <SwiperSlide className={styles.postSlider}>
                            <div key={index} className={styles.post}>
                                <img src={post.img} className={styles.img} alt="Post" />
                                <p className={styles.content}>{post.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SearchResult;
