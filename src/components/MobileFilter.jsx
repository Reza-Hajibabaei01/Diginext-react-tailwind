import React from "react";
import { FaFilter } from "react-icons/fa";
import { getData } from "../context/DataContext";

function MobileFilter({
  openFilter,
  setOpenFilter,
  search,
  setSearch,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleBrandChange,
  handleCategoryChange,
}) {
  const { categoryOnlyData, brandOnlyData } = getData();
  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };
  return (
    <>
      <div className="bg-gray-100 flex flex-row-reverse justify-between items-center md:hidden px-4 p-2 mt-5 ">
        <h1 className="font-Vazir-Normal text-lg">فیلتر</h1>
        <FaFilter onClick={toggleFilter} className="text-gray-800" />
      </div>
      {openFilter ? (
        <div className="bg-gray-100 p-2 md:hidden">
          <input
            type="text"
            placeholder=" ...جستجو"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white p-2 rounded-md border-gray-400 border-2 font-Vazir-Thin text-right w-full"
          />
          {/* بخش فیلتر کردن براساس دسته بندی */}
          <h1 className="mt-5 font-Vazir-Bold text-xl text-right">دسته بندی</h1>
          <div className="flex flex-col font-Vazir-Normal gap-2 mt-3 items-end">
            {categoryOnlyData?.map((item, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <button className="cursor-pointer uppercase">{item}</button>
                  <input
                    type="checkbox"
                    name={item}
                    checked={category === item}
                    value={item}
                    onChange={handleCategoryChange}
                  />
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
              value={brand}
              onChange={handleBrandChange}
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
              محدوده قیمت : {priceRange[0]}$ - ${priceRange[1]}
            </label>
            <input
              type="range"
              name=""
              id=""
              value={priceRange[1]}
              min={0}
              max={5000}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="transition-all w-50"
            />
          </div>
          <div className="flex flex-row-reverse">
            <button
              className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer font-Vazir-Normal"
              onClick={() => {
                setSearch("");
                setCategory("همه");
                setBrand("همه");
                setPriceRange([0, 5000]);
                setOpenFilter(false);
              }}
            >
              پاک کردن فیلتر
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default MobileFilter;
