import React from "react";
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";


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
          </div>
        </div>
      ) : (
        <div className="font-Vazir-Bold">سبد خرید خالی است</div>
      )}
    </div>
  );
};

export default Cart;