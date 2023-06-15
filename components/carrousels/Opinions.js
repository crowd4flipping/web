import React from "react";
import styles from "../../styles/carrousels.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import sliderStyles from "../sections/projects-page/sections/styles/MediaSlider.module.scss";

export const Opinions = ({data}) => {
  return (
    <Carousel
      className={sliderStyles.mediaSlider_carousel}
      autoPlay
      showArrows
      swipeable={false} 
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={`${sliderStyles.mediaSlider_button} ${sliderStyles.mediaSlider_button_right}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className={sliderStyles.mediaSlider_buttonIcon}
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
            className={sliderStyles.mediaSlider_button}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className={sliderStyles.mediaSlider_buttonIcon}
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
      {data.map((item, i) => {
        return (
          <div key={i}>
            <h2>{item.name}</h2>
            <p
              style={{
                fontSize: "0.8rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              {item.date}
            </p>
            <p className={sliderStyles.mediaSlider_opinion}>{item.text}</p>
          </div>
        );
      })}
    </Carousel>
  );
};
