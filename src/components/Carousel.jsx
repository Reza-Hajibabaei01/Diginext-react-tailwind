import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";

function Carousel() {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
          onMouseOver="this.style.backgroundColor='#555"
        />
      </div>
    );
  };
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px",
          }}
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.slice(8, 10)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 md:px-8"
            >
              <div className="flex flex-col sm:px-10 md:flex-row sm:gap-3 gap-10 justify-center h-100 lg:h-150 items-center my-20 md:my-0 px-4">
                <div className="md:space-y-6 space-y-3">
                  <h3 className="text-red-500 font-semibolda font-Vazir-Bold text-sm">
                    دنیای خود را با بهترین‌های تکنولوژی قدرتمند کنید
                  </h3>
                  <h1 className="md:text-4xl text-xl font-bold uppercase line-clamp-1  lg:line-clamp-2 md:w-125 text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-125 line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                    <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2 font-Vazir-Normal">
                    خرید کنید
                  </button>
                </div>
                <div className="rounded-full xl:h-110 xl:w-110 lg:w-100 lg:h-80 md:h-50 md:w-60 sm:h-100 sm:w-100 h-80 w-60 bg-white overflow-hidden flex items-center justify-center shadow-2xl shadow-red-400">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full xl:h-100 xl:w-100 lg:w-90 lg:h-90 md:w-50 md:h-50 w-90 h-90 bg-white object-scale-down hover:scale-105 transition-all "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </div>
  );
}

export default Carousel;
