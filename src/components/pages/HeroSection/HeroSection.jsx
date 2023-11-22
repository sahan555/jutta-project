// import { useEffect, useState } from "react";
import ShoeProducts from "../../parts/Products/shoeProducts";
import styles from "./HeroSection.module.css";

export const BASE_URL = "http://localhost:5000/shoe/get";

const HeroSection = () => {
 
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
            <ShoeProducts/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
