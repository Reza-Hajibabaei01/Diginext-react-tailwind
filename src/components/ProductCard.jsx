import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, cartItem } = useCart();
  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
      <img
        src={product.image}
        alt=""
        className="bg-gray-100 aspect-square"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h1 className="line-clamp-1 p-1 font-Vazir-Normal">{product.title}</h1>
      <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-red-500 xl:text-base lg:text-[12px] lg:px-2 lg:py-2 md:text-[12px] md:px-2 md:py-1 px-1 py-2 rounded-md text-white w-full cursor-pointer flex gap-1  items-center justify-center font-Vazir-Medium"
      >
        <IoCartOutline className="h-5 w-5" />
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductCard;
