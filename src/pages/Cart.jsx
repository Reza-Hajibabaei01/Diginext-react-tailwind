import React from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";

const Cart = () => {
  const { cartItem } = useCart();
  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 text-right md:px-8">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-Vazir-Bold text-2xl">
            سبد خرید من ({cartItem.length})
          </h1>
          <div>
            <div className="mt-10">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-md flex justify-end items-center mt-3"
                  >
                    <div className="flex items-center gap-10">
                      <span className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl">
                        <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer" />
                      </span>
                      <div className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                        <button className="cursor-pointer">+</button>
                        <span>1</span>
                        <button className="cursor-pointer">-</button>
                      </div>
                      <div className="text-right">
                        <h1 className="w-75 line-clamp-2">{item.title}</h1>
                        <p className="text-red-500 font-semibold text-lg">
                          ${item.price}
                        </p>
                      </div>
                      <img
                        className="w-20 h-20 rounded-md"
                        src={item.image}
                        alt={item.titel}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2">
                <h1 className="text-gray-800 font-bold text-xl font-Vazir-Bold">
                  اطلاعات تحویل
                </h1>
                <div className="flex flex-col space-y-1">
                  <label className="font-Vazir-Normal" htmlFor="">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    placeholder="نام ونام خانوادگی خود را وارد کنید"
                    className="p-2 rounded-md font-Vazir-Normal text-right"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="font-Vazir-Normal" htmlFor="">
                    آدرس
                  </label>
                  <input
                    type="text"
                    placeholder="آدرس خود را وارد کنید"
                    className="p-2 rounded-md font-Vazir-Normal text-right"
                  />
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label className="font-Vazir-Normal" htmlFor="">
                      استان
                    </label>
                    <input
                      type="text"
                      placeholder="استان خود را وارد کنید"
                      className="p-2 rounded-md w-full font-Vazir-Normal text-right"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label className="font-Vazir-Normal" htmlFor="">
                      کدپستی
                    </label>
                    <input
                      type="text"
                      placeholder="کدپستی خود را وارد کنید"
                      className="p-2 rounded-md w-full font-Vazir-Normal text-right"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label className="font-Vazir-Normal" htmlFor="">
                      شهر
                    </label>
                    <input
                      type="text"
                      placeholder="شهر خود را وارد کنید"
                      className="p-2 rounded-md w-full font-Vazir-Normal text-right"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label className="font-Vazir-Normal" htmlFor="">
                      شماره تماس
                    </label>
                    <input
                      type="text"
                      placeholder="شماره تماس خود را وارد کنید"
                      className="p-2 rounded-md w-full font-Vazir-Normal text-right"
                    />
                  </div>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer font-Vazir-Normal">
                  ارسال
                </button>
                <div className="flex items-center justify-center w-full font-Vazir-Bold text-gray-700">
                  -----------یا-----------
                </div>
                <div className="flex justify-center">
                  <button className="bg-red-500 text-white px-3 py-2 rounded-md font-Vazir-Normal">
                    تشخیص مکان
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-Vazir-Bold">سبد خرید خالی است</div>
      )}
    </div>
  );
};

export default Cart;
