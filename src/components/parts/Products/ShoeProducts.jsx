import { useEffect, useState } from "react";
import styles from "./ShoeProducts.module.css";
import { BASE_URL } from "../../pages/HeroSection/HeroSection";

const ShoeProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchShoeData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json.shoe);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchShoeData();
  }, []);

  if (error) return <div>Error : {error}</div>;
  if (loading) return <div>Loading</div>;
  console.log(data);
  if (!Array.isArray(data)) {
    return <p>Data format is not as expected</p>;
  }
  return (
    <>
      {data.map((shoe) => (
        <a key={shoe.id} className={`${styles.product} product`}>
          <img src={shoe.img} alt="Shoe 2" />
          <span className={styles.name}>{shoe.name}</span>
          <span className={styles.price}>Rs. {shoe.price}</span>
        </a>
      ))}
    </>
  );
};

export default ShoeProducts;
