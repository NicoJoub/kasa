import styles from "../styles/Banner.module.css";
import imgBanner from "../assets/images/background-banner.jpg";

function Banner(props) {
  return (
    <div className={styles.banner}>
      {props.title && <h1 className={styles.h1}>{props.title}</h1>}
      <img
        className={styles.backgroundBanner}
        src={imgBanner}
        alt={"Décor de la bannière"}
      />
    </div>
  );
}

export default Banner;
