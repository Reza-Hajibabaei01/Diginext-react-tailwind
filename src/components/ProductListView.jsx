import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductListView({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="space-y-4 w-full mt-2 rounded-md">
      <div className="bg-gray-100  flex flex-row-reverse gap-7 items-center p-2 rounded-md">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 w-60 rounded-md cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2 text-right">
          <h1 className="font-Vazir-Bold text-xl line-clamp-3 hover:text-red-400 w-full">
            {product.title}
          </h1>
          <p className="font-Vazir-Medium flex justify-end items-center text-lg ">
            ({product?.rating.rate}% تخفیف )$
            <span className="text-4xl">{product.price}</span>
          </p>
          <p className="font-Vazir-Thin text-[12px]">
            ارسال رایگان <span className="font-Vazir-Bold">هفت روز کاری</span>{" "}
            زمان میبرد
            <br />
            اما با ارسال سریع{" "}
            <span className="font-Vazir-Bold">دو روز کاری</span> تحویل بگیرید
          </p>
          <button onClick={()=>addToCart(product)} className="bg-red-400 mt-3 text-white px-3 py-1 rounded-md font-Vazir-Normal">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductListView;
