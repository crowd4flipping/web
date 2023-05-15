import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import styles from "./styles/MediaSlider.module.scss";

export const MediaSlider = ({ media }: { media: { link: string }[] }) => {
  return (
    <div className={styles.mediaSlider}>
      <Carousel
        className={styles.mediaSlider_slider}
        autoPlay
        navButtonsAlwaysVisible
        duration={100}
      >
        {media.map((item, key) => (
          <Image
            key={key}
            src={item.link}
            layout="fill"
            objectFit="contain"
            alt="imagenes-del-proyecto"
          />
        ))}
      </Carousel>
    </div>
  );
};
