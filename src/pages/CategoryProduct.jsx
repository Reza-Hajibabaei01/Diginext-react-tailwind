import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/images/Loading4.webm";
import { ChevronRight } from "lucide-react";
import ProductListView from "../components/ProductListView";

function CategoryProduct() {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate()
  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(
          category
        )}`
      );

      const data = res.data;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFilterData();
    window.scrollTo(0,0)
  });

  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <div className="flex justify-end">
            <button onClick={()=>navigate("/")} className="bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 font-Vazir-Normal">
              بازگشت
              <ChevronRight />
            </button>
          </div>
          {searchData.map((product, index) => {
            return (
              <div className="flex justify-end">
                <ProductListView key={index} product={product} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-100">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
}

export default CategoryProduct;
