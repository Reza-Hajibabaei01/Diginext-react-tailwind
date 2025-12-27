import React from "react";
import { useNavigate } from "react-router-dom";

function Breadcrums({ title }) {
  const navigator = useNavigate();
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-xl text-gray-700 font-Vazir-Normal text-right flex flex-row-reverse">
        <span className="cursor-pointer" onClick={() => navigator("/")}>
          خانه
        </span>{" "}
        /{" "}
        <span className="cursor-pointer" onClick={() => navigator("/products")}>
          محصولات
        </span>{" "}
        / <span>{title}</span>
      </h1>
    </div>
  );
}

export default Breadcrums;
