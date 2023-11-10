import styles from "./Button.module.css";

const Button = ({text,color,icon,...rest}) => {
  return (
    <button 
    {...rest}
    type="submit" className={`${styles[color]} ${styles.btn}`}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
