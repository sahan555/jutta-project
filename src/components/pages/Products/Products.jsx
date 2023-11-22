import ShoeProducts from "../../parts/Products/shoeProducts";
import styles from "./Products.module.css";



const Products = () => {
  return (
    <div className="products content-wrapper">
      <h1>Products</h1>
      <p>number of  Products</p>
      <div className={styles.products_wrapper}>
        <ShoeProducts/>
      </div>
    </div>
  );
};

export default Products;
