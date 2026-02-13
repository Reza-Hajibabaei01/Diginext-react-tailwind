import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div
      dir="rtl"
      className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center px-8 md:px-20 lg:px-30"
    >
      <div className="bg-[#3a3a63]/50 my-20 px-6 pb-5 rounded-2xl">
        <div className="font-Vazir-Bold text-2xl text-white text-center py-5 ">
          <h1>
            با <span className="text-red-500">دیجی‌نکست</span> تماس بگیرید
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-around items-start space-y-4 md:space-y-8 space-x-8">
          {/* بخش اطلاعات تماس */}
          <div className="space-y-2">
            <div className="space-y-2">
              <h2 className="text-white font-Vazir-Bold">اطلاعات تماس</h2>
              <p className="font-Vazir-Normal text-sm text-gray-300">
                اگر سوالی دارید یا به پشتیبانی نیاز دارید؟ما اینجا هستیم تا در
                سفر الکترونیکی شما را کمک کنیم.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-start space-x-1 items-center">
                <MapPin className="text-gray-300" />
                <p className="text-gray-300 font-Vazir-Normal text-xs">
                  <span className="font-bold">آدرس: </span>تهران،خیابان
                  محمدی،ساختمان مهرشاد40
                </p>
              </div>
              <div className="flex justify-start space-x-1 items-center">
                <Mail className="text-gray-300" />
                <p className="text-gray-300 font-Vazir-Normal text-xs">
                  <span className="font-bold">ایمیل: </span>support@diginext.com
                </p>
              </div>
              <div className="flex justify-start space-x-1 items-center">
                <Phone className="text-gray-300" />
                <p className="text-gray-300 font-Vazir-Normal text-xs">
                  <span className="font-bold">تلفن: </span>(+98) 9197505336
                </p>
              </div>
            </div>
          </div>
          {/* بخش فرم های ارسالی */}
          <div className="space-y-3">
            <div className="flex flex-col space-y-1">
              <label
                className="font-Vazir-Normal text-white text-sm"
                htmlFor=""
              >
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                placeholder="نام ونام خانوادگی خود را وارد کنید"
                className="p-2 rounded-lg font-Vazir-Normal text-sm text-right"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                className="font-Vazir-Normal text-white text-sm"
                htmlFor=""
              >
                آدرس ایمیل
              </label>
              <input
                type="text"
                placeholder="آدرس ایمیل خود را وارد کنید"
                className="p-2 rounded-lg font-Vazir-Normal text-sm text-right"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                className="font-Vazir-Normal text-white text-sm"
                htmlFor=""
              >
                پیام شما
              </label>

              <textarea
                placeholder="پیام خود را وارد کنید ..."
                className="p-2 bg-white appearance-none rounded-xl font-Vazir-Normal text-sm text-right text-gray-400"
                rows={4}
                cols={40}
                name=""
                id=""
              ></textarea>
            </div>
              <button className="bg-linear-to-r from-[#ff2f56] via-[#cf55b8] to-[#a84fff] w-full rounded-lg text-sm cursor-pointer text-white font-Vazir-Normal py-1 ">
                ارسال پیام
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
