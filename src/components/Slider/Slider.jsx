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

function Slider({ title, titleStyle, children, type }) {
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
      {title && <h6 className={`title ${titleStyle}`}>{title}</h6>}
      {buttons(type)}
      <Swiper
        slidesPerView={type === 1 ? 4 : 1}
        autoplay={{
          delay: 400000,
          disableOnInteraction: type === 1,
        }}
        pagination={{
          el: type === 1 ? `.carousel-type-1` : `.carousel-type-2`,
        }}
        observer
        observeParents
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
        breakpoints={
          type === 1 && {
            320: {
              slidesPerGroup: 2,
              slidesPerView: 2,
              spaceBetween: 12,
            },
            600: {
              slidesPerGroup: 3,
              slidesPerView: 3,
            },
            1040: {
              slidesPerGroup: 4,
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }
        }
      >
        {children}
      </Swiper>
      <div
        className={
          type === 1
            ? `carousel-pagination carousel-type-1`
            : `carousel-pagination carousel-type-2`
        }
      />
    </div>
  );
}

export default Slider;
