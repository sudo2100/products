
import {products} from "../datas/products"
import { Link} from "react-router-dom";

const ProductList = () => {

  return(
    <div className="product-list">
      <h2>상품 리스트</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </h3>
            <p>가격: {product.price}원</p>
            <p>설명: {product.description}</p>
          </li>
        ))}
      </ul> */}
      <div className="btn-add">
        <Link to='/add-product'>
          <button>상품 등록하기</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductList;