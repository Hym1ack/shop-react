import { Swiper } from "swiper/react";
import { Autoplay, FreeMode, Grid, Navigation, Pagination } from "swiper";
import { useMediaQuery } from "react-responsive";
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
// eslint-disable-next-line import/no-unresolved
import "swiper/css/free-mode";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/grid";

import "./Slider.css";

function Slider({
  title,
  titleStyle,
  children,
  type,
  paginationClass,
  isGrid,
  className,
}) {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const linksModules = isGrid ? [Grid, FreeMode] : [FreeMode];

  // banners
  if (type === "banners") {
    return (
      <div className="sliderBanners">
        {title && <h6 className={`title ${titleStyle}`}>{title}</h6>}
        {!isMobile && (
          <div className="carousel-recommendation-buttons">
            <button type="button" className="carousel-recommendation-prev">
              <PrevCarouselRec />
            </button>
            <button type="button" className="carousel-recommendation-next">
              <NextCarouselRec />
            </button>
          </div>
        )}
        <Swiper
          slidesPerView={isMobile ? "auto" : 4}
          freeMode
          preventClicks={false}
          preventClicksPropagation={false}
          pagination={{
            el: `.${paginationClass}`,
          }}
          modules={[Navigation, Pagination, FreeMode]}
          className="carouselItemsSlider"
          navigation={
            !isMobile && {
              nextEl: `.carousel-recommendation-next`,
              prevEl: `.carousel-recommendation-prev`,
            }
          }
          breakpoints={{
            320: {
              spaceBetween: 11,
            },
            480: {
              spaceBetween: 13,
            },
            991: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
        >
          {children}
        </Swiper>
        <div
          className={`carousel-pagination itemsPagination ${paginationClass}`}
        />
      </div>
    );
  }

  // links
  if (type === "links") {
    return (
      <>
        {title && <h4 className={titleStyle}>{title}</h4>}
        <Swiper
          slidesPerView="auto"
          modules={linksModules}
          className={className}
          freeMode
          grid={
            isGrid && {
              rows: 2,
              fill: "row",
            }
          }
          breakpoints={{
            320: {
              spaceBetween: 7,
            },
            480: {
              spaceBetween: 14,
            },
            768: {
              spaceBetween: 20,
            },
          }}
        >
          {children}
        </Swiper>
      </>
    );
  }

  // main
  if (type === "main") {
    return (
      <div className="sliderMain">
        {title && <h6 className={`title ${titleStyle}`}>{title}</h6>}
        <button className="carousel-prev" type="button">
          <PrevCarousel />
        </button>
        <button className="carousel-next" type="button">
          <NextCarousel />
        </button>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 400000,
          }}
          pagination={{
            el: `.mainPagination`,
          }}
          observer
          observeParents
          modules={[Autoplay, Navigation, Pagination]}
          className="mainSlider"
          spaceBetween={27}
          loop
          navigation={{
            nextEl: `.carousel-next`,
            prevEl: `.carousel-prev`,
          }}
        >
          {children}
        </Swiper>
        <div className="carousel-pagination mainPagination" />
      </div>
    );
  }

  // items
  return (
    <div className="sliderContainer">
      {title && <h6 className={`title ${titleStyle}`}>{title}</h6>}
      {!isMobile && (
        <div className="carousel-recommendation-buttons">
          <button type="button" className="carousel-recommendation-prev">
            <PrevCarouselRec />
          </button>
          <button type="button" className="carousel-recommendation-next">
            <NextCarouselRec />
          </button>
        </div>
      )}
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 400000,
          disableOnInteraction: true,
        }}
        pagination={{
          el: `.${paginationClass}`,
        }}
        observer
        observeParents
        modules={[Autoplay, Navigation, Pagination]}
        className="carouselItemsSlider"
        spaceBetween={27}
        loop
        navigation={{
          nextEl: `.carousel-recommendation-next`,
          prevEl: `.carousel-recommendation-prev`,
        }}
        breakpoints={{
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
        }}
      >
        {children}
      </Swiper>
      <div
        className={`carousel-pagination itemsPagination ${paginationClass}`}
      />
    </div>
  );
}

export default Slider;
