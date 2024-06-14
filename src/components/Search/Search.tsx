import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from "../../../data.json";
import styles from '../../css/Search/search.module.css';
import logo from '../../assets/CollectionLogo.svg';
import searchImg from '../../assets/search.svg';

interface UserData {
  name: string;
  concept: string;
  team1: string;
  team2?: string;
  team3?: string;
  team4?: string;
  team5?: string;
  team6?: string;
  team7?: string;
  type: string;
  image: string;
}

const Search: React.FC = () => {
  const nav = useNavigate();
  const [userData, setUserData] = useState<UserData[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    setUserData(data);
  }, []);

  const handleSearch = () => {
    if (searchInput === "") {
      alert("검색어를 입력하세요");
    } else {
      const filtered = data.filter(item =>
        item.name.includes(searchInput) ||
        item.team1.includes(searchInput) ||
        (item.team2 && item.team2.includes(searchInput)) ||
        (item.team3 && item.team3.includes(searchInput)) ||
        (item.team4 && item.team4.includes(searchInput)) ||
        (item.team5 && item.team5.includes(searchInput)) ||
        (item.team6 && item.team6.includes(searchInput)) ||
        (item.team7 && item.team7.includes(searchInput))
      );
      nav("/search/result", { state: { userData: filtered, inputValue: searchInput } });
    }
  };

  const handleHome = () => {
    nav('/');
  };

  const handleWrite = () => {
    nav('/qr');
  };

  const handleGallery = () => {
    nav('/gallery');
  };

  const handlePostDetails = (teamName: string) => {
    nav('/search/result', { state: { teamName } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <p className={styles.home} onClick={handleHome}>Home</p>
        <p className={styles.write} onClick={handleWrite}>포스트잇 작성하기</p>
        <p className={styles.gallery} onClick={handleGallery}>갤러리 보러가기</p>
      </div>
      <img src={logo} className={styles.logo} />
      <input
        className={styles.searchInput}
        placeholder="작품 이름 혹은 학생 이름을 입력하세요"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <img src={searchImg} className={styles.searchImg} alt="search" onClick={handleSearch} />

      <div className={styles.wrapData}>
        {userData.map((item, index) => (
          <div key={index} className={styles.wrapContent} onClick={() => handlePostDetails(item.name)}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <div className={styles.wrapText}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.teamName}>
                {item.team1} {item.team2} {item.team3} {item.team4} {item.team5} {item.team6} {item.team7}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
