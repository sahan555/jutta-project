import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  console.log(styles);
  return (
    <>
      
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={`${styles.foot_about} yesarimilxa` }>
                <figure className={styles.foot_logo}>
                  <img src="images/logo.png" />
                </figure>
                <p>Trusted site for buying Shoes</p>
              </div>
              <div className={styles.social_links}>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#!">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.foot_links}>
                <h3 className={styles.foot_heading}>Related Links</h3>
                <ul className={styles.foot_ul}>
                  <li>
                    <span className={styles.border_line} />
                    <a href="#!">Products</a>
                  </li>
                  <li>
                    <span className={styles.border_line} />
                    <a href="#">My Cart</a>
                  </li>
                  <li>
                    <span className={styles.border_line} />
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <span className={styles.border_line} />
                    <a href="#">Register</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={styles.foot_contact}>
                <h3 className={styles.foot_heading}>Our Contact</h3>
                <ul className={styles.foot_ul}>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    <a href="#">
                      Subarna Shamsher Marg, Baluwatar, Kathmandu
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-phone" />
                    <a href="tel:+000000">0000000</a>
                  </li>
                  <li>
                    <i className="fas fa-phone" />
                    <a href="tel:+000000">9841000000</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope" />
                    <a href="mailto:info@hamrojutta.com">info@hamrojutta.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className="container">
            <p>
              Copyright ©2023. All Rights Reserved by 
              <a href="#">HamroJutta</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
