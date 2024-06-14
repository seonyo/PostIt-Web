import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase/config";
import styles from '../../css/Search/searchResult.module.css'; 

interface Postit {
    content: string;
    img: string;
    name: string;
}

const SearchResult: React.FC = () => {
    const location = useLocation();
    const { teamName } = location.state || {};
    const [posts, setPosts] = useState<Postit[]>([]);

    useEffect(() => {
        if (teamName) {
            const dbRef = ref(db, "/postit");
            onValue(dbRef, (DataSnapshot) => {
                const data = DataSnapshot.val();
                if(data){
                    const filter = Object.values(data as {[key: string]:Postit}).filter((post: Postit) => post.name === teamName)
                    setPosts(filter)
                }
            });
        }
    }, [teamName]);

    return (
        <div className={styles.container}>
            <h1>Posts for {teamName}</h1>
            <div className={styles.posts}>
                {posts.map((post, index) => (
                    <div key={index} className={styles.post}>
                        <img src={post.img} className={styles.img} alt="Post" />
                        <p className={styles.content}>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResult;
