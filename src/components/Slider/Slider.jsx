import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import { ReactComponent as NextCarousel } from "../../assets/images/carouselNext.svg";
import { ReactComponent as NextCarouselRec } from "../../assets/images/carouselNextRec.svg";
import { ReactComponent as PrevCarousel } from "../../assets/images/carouselPrev.svg";
import { ReactComponent as PrevCarouselRec } from "../../assets/images/carouselPrevRec.svg";

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

import "./Slider.css";

function Slider({ title, titleStyle, children, type, slidesPerView }) {
  const buttons = (typeBtn) => {
    if (typeBtn === 1) {
      return (
        <div className="carousel-recommendation-buttons">
          <button type="button" className="carousel-recommendation-prev">
            <PrevCarouselRec />
          </button>
          <button type="button" className="carousel-recommendation-next">
            <NextCarouselRec />
          </button>
        </div>
      );
    }
    return (
      <>
        <button className="carousel-prev" type="button">
          <PrevCarousel />
        </button>
        <button className="carousel-next" type="button">
          <NextCarousel />
        </button>
      </>
    );
  };

  return (
    <div className="sliderContainer">
      {title && (
        <h6 className="title" style={titleStyle}>
          {title}
        </h6>
      )}
      {buttons(type)}
      <Swiper
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 4000,
          disableOnInteraction: type === 1,
        }}
        pagination={
          type === 2 && {
            el: `.carousel-pagination`,
          }
        }
        modules={[Autoplay, Navigation, Pagination]}
        className={type === 1 ? "sliderType1" : "sliderType2"}
        spaceBetween={27}
        loop
        navigation={
          type === 1
            ? {
                nextEl: `.carousel-recommendation-next`,
                prevEl: `.carousel-recommendation-prev`,
              }
            : {
                prevEl: `.carousel-prev`,
                nextEl: `.carousel-next`,
              }
        }
      >
        {children}
      </Swiper>
      {type === 2 && <div className="carousel-pagination" />}
    </div>
  );
}

export default Slider;
