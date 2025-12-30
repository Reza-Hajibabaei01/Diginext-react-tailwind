import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/images/Loading4.webm";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

function SingleProduct() {
  const params = useParams();
  const [SingleProduct, setSingleProduct] = useState("");
  const { addToCart } = useCart();
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const product = res.data;
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  const OrginalPrice = Math.round(
    SingleProduct.price +
      (SingleProduct.price * SingleProduct?.rating?.rate) / 100
  );
  return (
    <>
      {SingleProduct ? (
        <div className="px-4 pb-4 md:px-8">
          <Breadcrums title={SingleProduct.title} />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* بخش تصویر محصول */}
            <div className="w-full">
              <img
                src={SingleProduct.image}
                alt={SingleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            {/* بخش اطلاعات محصول */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl text-xl text-right font-bold text-gray-800">
                {SingleProduct.title}
              </h1>
              {/* در دیوو پایین چون فعلا از آی‌پی برند دریافت نکردیم از کتگوری استفاده کردیم */}
              {/* <div className="text-gray-700">{SingleProduct.brand?.toUpperCase()} / {SingleProduct.category.toUpperCase()} / {SingleProduct.model}</div> */}
              <div className="text-gray-700 flex flex-row-reverse">
                {SingleProduct.category?.toUpperCase()}
              </div>
              <p className="text-xl flex flex-row-reverse items-center text-red-500 font-bold">
                ${SingleProduct.price}
                <span className="line-through px-2 text-gray-700">
                  ${OrginalPrice}
                </span>
                <span className="bg-red-500 text-white py-2 px-4 rounded-full font-Vazir-Normal">
                  {SingleProduct?.rating?.rate} % تخفیف
                </span>
              </p>
              <p className="text-gray-600 text-right">
                {SingleProduct.description}
              </p>
              {/* بخش تعداد */}
              <div className="flex flex-row-reverse items-center gap-4">
                <label
                  htmlFor=""
                  className="text-sm font-Vazir-Medium text-gray-700"
                >
                  : تعداد
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 foucs:outline-none foucs:ring-2 foucs:ring-red-500"
                />
              </div>
              <div className="flex flex-row-reverse gap-4 mt-4">
                <button onClick={()=>addToCart(SingleProduct)} className="flex px-6 gap-2 py-2 text-lg bg-red-500 text-white cursor-pointer rounded-md font-Vazir-Normal">
                  <IoCartOutline className="w-6 h-6" />
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
