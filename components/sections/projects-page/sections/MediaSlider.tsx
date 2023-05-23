import Image from "next/image";
import styles from "./styles/MediaSlider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const MediaSlider = ({ media }: { media: { link: string }[] }) => {
  return (
    <div className={styles.mediaSlider}>
      <Carousel
        className={styles.mediaSlider_carousel}
        autoPlay
        showArrows
        showThumbs={false}
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={`${styles.mediaSlider_button} ${styles.mediaSlider_button_right}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="4"
                stroke="currentColor"
                className={styles.mediaSlider_buttonIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={styles.mediaSlider_button}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="4"
                stroke="currentColor"
                className={styles.mediaSlider_buttonIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )
        }
      >
        {media.map((item, i) => {
          return (
            <div key={i}>
              <Image
                src={item.link}
                objectFit="contain"
                alt="project-media"
                width={500}
                height={400}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
