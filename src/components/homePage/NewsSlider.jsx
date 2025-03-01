import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { newsSliderData } from "../../libs/DataBase";

const NewsSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-10/12 mx-auto">
      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-red-600 z-10">
        <FaArrowLeft />
      </button>
      <button className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-red-600 z-10">
        <FaArrowRight />
      </button>

      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        spaceBetween={40} // Adjust spacing between slides
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1} // Start with the second slide (index 1)
        coverflowEffect={{
          rotate: 20, // Adjust rotation for the coverflow effect
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          // When window width is >= 640px (tablet and above)
          640: {
            slidesPerView: 3, // Show 3 slides
            spaceBetween: 80, // Adjust spacing for desktop
          },
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {newsSliderData?.map((item) => (
          <SwiperSlide key={item?.id}>
            <img className="w-full" src={item?.image} alt={item?.title || "Slide"} />
            <p className="font-Playfair font-semibold text-xl">{ item?.title.slice(0, 45) }...</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;