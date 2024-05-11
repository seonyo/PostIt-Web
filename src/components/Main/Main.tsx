import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../css/Main/Main.module.css'
import LogoText from '../../assets/LogoText.svg'
import mainLogo from '../../assets/mainLogo.svg'
import POST from '../../assets/POST.svg'
import Hand from '../../assets/Hand.svg'

const Main: React.FC = () => {
  const navigate = useNavigate()

  const handleViewGallery = () => {
    // navigate('/main')
  }

  const hanldeWriteBtn = () =>{
    // navigate('')
  }

  return (
    <div className={styles.wrap}>
      <img src={LogoText} className={styles.LogoText} />
      <p className={styles.viewGallery} onClick={handleViewGallery}>포스트잇 갤러리</p>
      <div className={styles.content}>
        <img src={POST} className={styles.POST} />
        <img src={mainLogo} className={styles.mainLogo} />
        <p className={styles.ContentTitle}>전시의 추억을 간직하다.</p>
        <p className={styles.explainContent}>IT Show의 추억을 영원히<br /> 간직할 수 있는 방명록 웹사이트에 <br /> 오신 것을 환영합니다! 🎉</p>
      </div>

      <div className={styles.secondContent}>
        <p className={styles.h1}>
          <span className={styles.bold}>포스트잇</span>을 <br /> <span className={styles.bold}>작성</span>해주세요!!
        </p>

        <p className={styles.contentPr}>"한 줄의 메시지가 학생들에게 큰 힘이 됩니다. <br />여러분의 진심이 담긴 응원과 격려를 남겨주세요. 💬"</p>
        <img src={Hand} className={styles.hand} />
      </div>

      <div className={styles.wrapBtn}>
        <button className={styles.writeBtn} onClick={hanldeWriteBtn}>작성하기</button> {/* 작성하기 버튼을 contentPr 아래에 배치 */}
      </div>
    </div>
  )
}

export default Main