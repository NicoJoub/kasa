import styles from "../styles/Card.module.css";
import { NavLink } from "react-router-dom";

function Card({ cover, title, id }) {
  const url = "logement/" + id;
  return (
    <nav>
      <NavLink className={styles.cardLogement} to={url}>
        <img
          className={styles.cardImg}
          src={cover}
          alt="Appartement en location"
        />
        <p className={styles.titleCard}>{title}</p>
      </NavLink>
    </nav>
  );
}

export default Card;
