import logo from "../assets/images/logo.png";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt={"Logo Kasa"} />
      <nav>
        <ul className={styles.navHeader}>
          <li>
            <Link to="/" className={styles.navHeaderLink}>
              Acceuil
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.navHeaderLink}>
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
