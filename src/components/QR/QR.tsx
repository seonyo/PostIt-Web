import styles from '../../css/QR/QR.module.css'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/QrLogo.svg'
import background from '../../assets/QrBackground.svg'

const QR: React.FC = () => {
  const navigate = useNavigate()

  const handleviewGallery = ()=>{
    // navigate('')
  }

  return (
    <div className={styles.wrap}>
      <img src={Logo} className={styles.Logo} />
      <img src={background} className={styles.background} />

      <p className={styles.title}>
        <span className={styles.span}>QR코드</span>를 스캔해주세요!</p>

      <p className={styles.content}>QR코드를 스캔하면 포스트잇을 쓸 수 있는 
      <span className={styles.span2}>POST IT!</span> 어플이 기다리고 있을거에요!!!</p>

      <button className={styles.viewGallery} onClick={handleviewGallery}>포스트잇 갤러리</button>
    </div>
  )

}

export default QR