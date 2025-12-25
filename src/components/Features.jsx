import { Clock, Lock, RotateCcw, Truck } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Truck,
    text: "ارسال رایگان",
    subtext: "برای سفارش های بالای 100 تومان",
  },
  { icon: Lock, text: "پرداخت امن", subtext: "پرداخت های محافظت شده" },
  {
    icon: RotateCcw,
    text: "بازگشت آسان",
    subtext: "سیاست بازگشت محصول تا 30 روز",
  },
  { icon: Clock, text: "پشتیبانی 24 ساعته", subtext: "خدمات مشتری اختصاصی" },
];
function Features() {
  return (
    <div className="bg-gray-100 py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center text-center sm:text-left"
              >
                <feature.icon
                  className="shrink-0 h-10 w-10 text-gray-600"
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <p className="text-base font-Vazir-Normal text-gray-900">
                    {feature.text}
                  </p>
                  <p className="text-sm mt-1 font-Vazir-Normal text-gray-500">
                    {feature.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
