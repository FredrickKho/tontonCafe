import { useParams } from "react-router-dom";
import ProductCard from "../../../component/product-card/product-card";
import { useContext } from "react";
import { ProductContext } from "../../../context/product.context";
import './productList.styles.scss'
export const ProductList = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);
  const test = products.find(a=>a.type === category);
  const test2 = test.lists;
  return (
    <div className="products-container">
      {/* {console.log(test2)} */}
      {test2.map((product)=>(
        // console.log(product.name)
        <ProductCard key={product.id} product = {product} category = {category}></ProductCard>
      ))}
    </div>
  );
};
