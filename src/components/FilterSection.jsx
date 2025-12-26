import React from "react";
import { getData } from "../context/DataContext";

function FilterSection() {
  const { categoryOnlyData, brandOnlyData } = getData();
  return (
    <div className="bg-gray-100 mt-10 p-4 rounded-md h-max">
      <input
        type="text"
        placeholder=" ...جستجو"
        className="bg-white p-2 rounded-md border-gray-400 border-2 font-Vazir-Thin text-right"
      />
      {/* بخش فیلتر کردن براساس دسته بندی */}
      <h1 className="mt-5 font-Vazir-Bold text-xl text-right">دسته بندی</h1>
      <div className="flex flex-col font-Vazir-Normal gap-2 mt-3 items-end">
        {categoryOnlyData?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <button className="cursor-pointer uppercase">{item}</button>
              <input type="checkbox" />
            </div>
          );
        })}
      </div>

      {/*بخش فیلتر کردن براساس برند */}
      <h1 className="mt-5 font-Vazir-Bold text-xl text-right mb-3">
        برند محصول
      </h1>
      <div className=" text-right">
        <select
          className="font-Vazir-Normal text-right bg-white w-full p-2 border-gray-200 border-2 rounded-md"
          name=""
          id=""
        >
          {brandOnlyData?.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      {/* بخش فیلتر کردن بر اساس قیمت */}
      <h1 className="mt-5 font-Vazir-Bold text-xl text-right mb-3">
        محدوده قیمت
      </h1>
      <div className="flex flex-col gap-2">
        <label className="font-Vazir-Thin text-right" htmlFor="">
          محدوده قیمت : 0$ - $5000
        </label>
        <input type="range" name="" id="" />
      </div>
      <div className="flex flex-row-reverse">
        <button className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer font-Vazir-Normal">
          پاک کردن فیلتر
        </button>
      </div>
    </div>
  );
}

export default FilterSection;
