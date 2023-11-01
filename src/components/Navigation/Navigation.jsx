import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <header>
      <div className={`${styles.content_wrapper} content-wrapper`}>
        <div className={styles.logo}>
          <a href="#">
            <img src="/images/logo.png" alt="" />
          </a>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
        </nav>
        <div className={styles.link_icons}>
          <a href="#">
            <i className="fas fa-shopping-cart" />
            <span>0</span>
          </a>
          <a href="#">
            <i className="fas fa-user" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
