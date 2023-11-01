import styles from "./HeroSection.module.css";

function HeroSection() {
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
}

export default HeroSection;
