
import mainImage from '../assets/hero.png';

const Main = () => {

  return(
    <div className="main">
      <h1>컴퓨터 기기 쇼핑몰</h1>
      <h3>최신 컴퓨터 기기를 한 곳에서 만나보세요!</h3>
      <img src={mainImage} alt="메인이미지" />
    </div>
  )
}

export default Main;