import React from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const { user } = useUser();
  // محاسبه جمع قیمت محصولات
  const totalPrice = cartItem.reduce((total, item) => total + item.price, 0);
  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 text-right md:px-8">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-Vazir-Bold text-2xl">
            سبد خرید من ({cartItem.length})
          </h1>
          <div>
            {/* بخش خرید نهایی */}
            <div className="mt-10">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-md flex justify-end items-center mt-3"
                  >
                    <div className="flex items-center gap-10">
                      <span
                        onClick={() => deleteItem(item.id)}
                        className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl"
                      >
                        <FaRegTrashAlt className="text-red-500 text-2xl cursor-pointer" />
                      </span>
                      <div className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                        <button
                          onClick={() =>
                            updateQuantity(cartItem, item.id, "increase")
                          }
                          className="cursor-pointer"
                        >
                          +
                        </button>
                        <span>{item?.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(cartItem, item.id, "decrease")
                          }
                          className="cursor-pointer"
                        >
                          -
                        </button>
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
            {/* بخش فاکتور */}
            <div className="grid grid-cols-2 gap-20">
              <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                <h1 className="text-gray-800 font-Vazir-Bold text-xl">
                  فاکتور فروش
                </h1>
                <div className="flex flex-row-reverse justify-between items-center ">
                  <h1 className="flex flex-row-reverse gap-1 items-center text-gray-700 font-Vazir-Medium ">
                    <span>
                      <LuNotebookText />
                    </span>
                    مجموع هزینه کالا
                  </h1>
                  <p>${totalPrice}</p>
                </div>
                <div className="flex flex-row-reverse justify-between items-center">
                  <h1 className="flex flex-row-reverse gap-1 items-center text-gray-700 font-Vazir-Medium ">
                    <span>
                      <MdDeliveryDining />
                    </span>
                    هزینه ارسال کالا
                  </h1>
                  <p className="text-red-500 font-Vazir-Medium">
                    <span className="text-gray-600 line-through">$25</span>{" "}
                    رایگان
                  </p>
                </div>
                <div className="flex flex-row-reverse justify-between items-center">
                  <h1 className="flex flex-row-reverse gap-1 items-center text-gray-700 font-Vazir-Medium ">
                    <span>
                      <GiShoppingBag />
                    </span>
                    هزینه بیمه کالا
                  </h1>
                  <p className="text-red-500 font-Vazir-Medium">$5</p>
                </div>
                <hr className="text-gray-200 mt-2" />
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-lg">${totalPrice + 5}</p>
                  <h1 className="font-Vazir-Bold text-lg">جمع کل فاکتور</h1>
                </div>
                <div>
                  <h1 className="font-Vazir-Normal text-gray-700 mb-3 mt-7">
                    کد تخفیف را اعمال کنید
                  </h1>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      className="p-2 rounded-md w-full font-Vazir-Thin text-right"
                      placeholder="کد را وارد کنید"
                    />
                    <button className="bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md font-Vazir-Normal">
                      اعمال
                    </button>
                  </div>
                  <button className="bg-red-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3 font-Vazir-Normal">
                    تسویه کردن
                  </button>
                </div>
              </div>
              {/* بخش اطلاعات ارسال کالا */}
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
                    value={user.fullName}
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
                    value={location?.country}
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
                      value={location?.postcode}
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
                      value={location?.city}
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
                  <button
                    onClick={getLocation}
                    className="bg-red-500 text-white px-3 py-2 rounded-md font-Vazir-Normal"
                  >
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
