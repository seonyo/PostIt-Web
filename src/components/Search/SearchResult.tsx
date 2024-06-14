import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import styles from '../../css/Search/searchResult.module.css'
// import logo from '../../assets/logo.svg';
import searchImg from '../../assets/search.svg';
import data from '../../../data.json';

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

interface LocationState {
    userData: UserData[];
    inputValue: string;
}

const SearchResult: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userData, inputValue } = location.state as LocationState;
    const [searchInput, setSearchInput] = useState<string>(inputValue);
    const [placeholder, setPlaceholder] = useState<string>(inputValue);
    const [userDataResult, setUserDataResult] = useState<UserData[]>(userData);

    useEffect(() => {
        setSearchInput(inputValue);
        setUserDataResult(userData);
    }, [inputValue, userData]);

    const handleBackIcon = () => {
        navigate(-1);
    };

    const handleInputFocus = () => {
        setPlaceholder("");
    };

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
            ); setUserDataResult(filtered);
        }
    };

    const handleSelectPage = (name: string) => {
        localStorage.setItem("name", name);
        navigate("/select");
    }

    return (
        <div className={styles.container}>
            <img src={logo} className={styles.logo} alt="logo" />
            <div className={styles.searchInput}>
                <Icon className={styles.backIcon}
                    icon="material-symbols-light:arrow-back-ios-rounded"
                    onClick={handleBackIcon} />
                <input
                    className={styles.searchInputbox}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder={placeholder}
                    onFocus={handleInputFocus}
                />
                <img src={searchImg} className={styles.searchImg} alt="search" onClick={handleSearch} />
            </div>

            <div className={styles.wrapData}>
                {userDataResult.map((item, index) => (
                    <div key={index} className={styles.wrapContent} onClick={() => handleSelectPage(item.name)}>
                        <img src={item.image} alt={item.name} className={styles.image} />

                        <div className={styles.wrapText}>
                            <p className={styles.name}>{item.name}</p>
                            <p className={styles.teamName}>{item.team1} {item.team2} {item.team3} {item.team4} {item.team5} {item.team6} {item.team7}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResult;
