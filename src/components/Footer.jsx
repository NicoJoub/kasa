import styles from "../styles/Footer.module.css";
import logo from "../assets/images/logoFooter.png";

function Footer() {
  return (
    <footer>
      <img className={styles.logo} src={logo} alt={"Logo Kasa"} />
      <p className={styles.footerText}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
