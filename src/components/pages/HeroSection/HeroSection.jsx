import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const BASE_URL = "http://localhost:5000/shoe/get";

const HeroSection = () => {
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
  console.log(data)
  if (!Array.isArray(data)) {
    return <p>Data format is not as expected</p>;
  }
  return (
    <>
      <div className={styles.featured}>
        <h2>HamroJutta</h2>
        <p>Sadhai ko lagi Hamrai Lagi</p>
      </div>
      <div className={`${styles.recentlyadded} ${styles.content_wrapper}`}>
        <div className="container">
          <h2>Recently Added Products</h2>
          <div className={styles.products}>
          {data?.map((shoe) => (
            <a key={shoe.id} className={styles.product}>
            <img src={shoe.img} alt="Shoe 1" />
            <span className={styles.name}>{shoe.name}</span>
            <span className={styles.price}>Rs. {shoe.price}</span>
          </a>
          ))}
          </div>
          <div className={styles.products}>
            <a href="#" className={styles.product}>
              <img src="images/6.png" alt="Shoe 1" />
              <span className={styles.name}>Shoe 1</span>
              <span className={styles.price}>Rs. 1200</span>
            </a>
            <a href="#" className={styles.product}>
              <img src="images/3.png" alt="Shoe 2" />
              <span className={styles.name}>Shoe 2</span>
              <span className={styles.price}>Rs. 1200</span>
            </a>
            <a href="#" className={styles.product}>
              <img src="images/4.png" alt="Shoe 3" />
              <span className={styles.name}>Shoe 3</span>
              <span className={styles.price}>Rs. 1200</span>
            </a>
            <a href="#" className={styles.product}>
              <img src="images/5.png" alt="Shoe 4" />
              <span className={styles.name}>Shoe 4</span>
              <span className={styles.price}>Rs. 1200</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
