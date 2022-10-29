import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
// Import Images
import partner1 from "../../assets/partners/asset 10.png";
import partner2 from "../../assets/partners/asset 3.png";
import partner3 from "../../assets/partners/asset 4.png";
import partner4 from "../../assets/partners/asset 5.png";
import partner5 from "../../assets/partners/asset 6.png";
import partner6 from "../../assets/partners/asset 7.png";
import partner7 from "../../assets/partners/asset 8.png";
import partner8 from "../../assets/partners/asset 9.png";
const Partners = () => {
  return (
    <div className="container mx-auto py-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-32 opacity-60 hover:opacity-100 mx-auto"
            src={partner1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32 opacity-60 hover:opacity-100 mx-auto"
            src={partner2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32 opacity-60 hover:opacity-100 mx-auto"
            src={partner3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32 opacity-60 hover:opacity-100 mx-auto"
            src={partner4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32 opacity-60 hover:opacity-100 mx-auto"
            src={partner5}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32 opacity-60 hover:opacity-100 mx-auto"
            src={partner6}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32 opacity-60 hover:opacity-100 mx-auto"
            src={partner7}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-32 opacity-60 hover:opacity-100 mx-auto"
            src={partner8}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
