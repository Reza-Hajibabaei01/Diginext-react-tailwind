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
      <h1 className="line-clamp-2 p-1 font-Vazir-Normal">{product.title}</h1>
      <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-red-500 px-1 md:px-3 py-2 text-[12px] md:text-sm rounded-md text-white w-full cursor-pointer flex gap-1 md:gap-2 items-center justify-center font-Vazir-Medium"
      >
        <IoCartOutline className="md:w-6 md:h-6 w-4 h-4" />
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductCard;
