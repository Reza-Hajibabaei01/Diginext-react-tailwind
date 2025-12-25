import React from "react";
import banner from "../assets/images/banner1.jpg";

function MidBanner() {
  return (
    <div className="bg-gray-100 md:px-12 md:py-24">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-137.5 md:h-100"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-8 font-Vazir-Medium">
              لوازم الکترونیکی نسل بعدی در دستان شما
            </h1>
            <p className="text-lg md:text-xl mb-6 font-Vazir-Normal">
              جدیدترین نوآوری‌های فناوری را با قیمت‌های بی‌نظیر و ارسال رایگان
              برای همه سفارشات پیدا کنید
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-Vazir-Light py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
              خرید کنید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidBanner;
