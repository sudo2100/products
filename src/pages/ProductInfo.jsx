import { useParams, useNavigate } from "react-router-dom";
import {products} from "../datas/products"

const ProductInfo = () => {
  // URL 파라미터에서 id 값을 추출
  const {id} = useParams()
  // 페이지 이동 hook
  const navigate = useNavigate();

  // products 리스트에 id와 일치하는 상품 찾기
  const product = products.find(product => 
          product.id === parseInt(id))

  // 페이지 이동 핸들러
  const doClick = () => {
    navigate('/products');
  }

  return(
    <div className="product-info">
      <h3>상품 ID: {id}</h3>
      {/* <p>가격: {products[id-1].price}</p>
      <p>설명: {products[id-1].description}</p> */}
      <p>이름: {product.name}</p>
      <p>가격: {product.price}</p>
      <p>설명: {product.description}</p>
      
      {/* <button onClick={() => {navigate('/products')}}>목록보기</button> */}
      <button onClick={doClick}>목록보기</button>
    </div>
  )
}

export default ProductInfo;