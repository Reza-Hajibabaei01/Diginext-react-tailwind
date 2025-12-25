import React from "react";
import { Link } from "react-router-dom";
// import Logo from '../assets/Logo.png'
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 text-right">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between flex-row-reverse">
        {/*  بخش اطلاعات */}
        <div className="mb-6 md:mb-0">
          <Link to="/">
            <h1 className="text-red-500 text-2xl font-Vazir-Bold font-bold">
              دیجی‌نکست
            </h1>
          </Link>
          <p className="mt-2 text-sm font-Vazir-Normal">
            دنیای خود را با بهترین‌های الکترونیک قدرتمند کنید.
          </p>
          <p className="mt-2 text-sm font-Vazir-Normal">
            تهران‌،خیابان محمدی،ساختمان مهرشاد40،واحد10
          </p>
          <p className="text-sm font-Vazir-Normal">
            rezahajibabaei2001@gmail.com : ایمیل
          </p>
          <p className="text-sm font-Vazir-Normal">تلفن: (+98) 9197505336</p>
        </div>
        {/* خدمات مشتریان */}
        <div className="mb-6 md:mb-0 ">
          <h3 className="text-xl font-Vazir-Bold">خدمات مشتریان</h3>
          <ul className="mt-2 text-sm font-Vazir-Normal space-y-2">
            <li>تماس با ما</li>
            <li>ارسال و مرجوعی</li>
            <li>سوالات متداول</li>
            <li>پیگیری سفارش</li>
            <li>راهنمای اندازه</li>
          </ul>
        </div>
        {/* فضا های اجتماعی */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-Vazir-Bold">ما را دنبال کنید</h3>
          <div className="flex justify-end space-x-2  mt-2">
            <FaFacebook />
            <FaInstagram />
            <FaTwitterSquare />
            <FaPinterest />
          </div>
        </div>
        {/* بخش اطلاع رسانی ها */}
        <div>
          <h3 className="text-xl font-Vazir-Bold">در جریان باشید</h3>
          <p className="mt-2 text-sm font-Vazir-Normal">
            برای دریافت پیشنهادات ویژه، هدایای رایگان و موارد دیگر مشترک شوید
          </p>
          <form action="" className="mt-4 flex">
            <input
              type="email"
              placeholder="آدرس ایمیل خود را وارد کنید"
              className="w-full p-2 rounded-l-md font-Vazir-Normal text-right text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700 font-Vazir-Normal"
            >
              اشتراک
            </button>
          </form>
        </div>
      </div>
      {/* بخش حقوق سایت */}
      <div className="mt-8 border-t font-Vazir-Medium border-gray-700 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-red-500">DigiNext </span>تمامی حقوق محفوظ است
        </p>
      </div>
    </footer>
  );
};

export default Footer;
