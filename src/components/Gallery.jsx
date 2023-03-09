import Card from "../components/Card";
import logements from "../assets/datas/logements.json";
import styles from "../styles/Gallery.module.css";

function Gallery() {
  return (
    <div className={styles.blocGallery}>
      {logements.map(({ id, cover, title }) => (
        <Card id={id} cover={cover} title={title} key={id.toString()} />
      ))}
    </div>
  );
}

export default Gallery;
