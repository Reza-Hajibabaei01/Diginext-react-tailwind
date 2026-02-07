import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center bg-[#DEDEDE]">
      <div
        dir="rtl"
        className="bg-white my-7 mx-28 w-full py-5 px-10 rounded-lg"
      >
        <div>
          <h1 className="text-center font-Vazir-Bold text-xl">
            درباره دیجی نکست
          </h1>
          <p className="text-justify font-Vazir-Thin text-sm py-3">
            به <span className="text-red-500 font-bold">دیجی‌</span>نکست مقصد یک
            مرحله‌ای شما برای جدیدترین و بهترین‌ها در زمینه الکترونیک، خوش
            آمدید. از گجت‌های پیشرفته گرفته تا لوازم جانبی ضروری، ما اینجا هستیم
            تا زندگی فناوری شما را با محصولات ممتاز و خدمات بی‌نظیر تقویت کنیم
          </p>
        </div>
        <div>
          <h3 className="text-red-500 text-right font-Vazir-Bold text-lg">
            ماموریت ما
          </h3>
          <p className="text-justify font-Vazir-Thin text-sm py-3">
            {" "}
            در دیجی نکست، ماموریت ما این است که فناوری نوآورانه را برای همه در
            دسترس قرار دهیم. ما مشتاقیم که مردم را با ابزارها و فناوری‌هایی که
            برای پیشرفت در دنیای دیجیتال نیاز دارند، متصل کنیم - همه با قیمت‌های
            رقابتی و تحویل با سرعت و دقت.
          </p>
        </div>
        <div>
          <h3 className="text-red-500 text-right font-Vazir-Bold text-lg">
            چرا دیجی‌نکست را انتخاب کنیم؟
          </h3>
          <ul className="list-disc list-inside text-sm font-Vazir-Thin py-3">
            <li>محصولات الکترونیکی با کیفیت بالا از برندهای معتبر</li>
            <li>ارسال بسیار سریع و ایمن</li>
            <li>پشتیبانی قابل اعتماد مشتری، همیشه آماده کمک</li>
            <li>بازگشت آسان و تجربه خرید بدون دردسر</li>
          </ul>
        </div>
        <div>
          <h3 className="text-red-500 text-right font-Vazir-Bold text-lg">
            چشم‌انداز ما
          </h3>
          <p className="text-justify font-Vazir-Thin text-sm py-3">
            ما آینده‌ای را تصور می‌کنیم که در آن فناوری، زندگی روزمره را ارتقا
            می‌دهد. در دیجی‌نکست ما متعهد به پیشرو بودن هستیم و راه‌حل‌های
            پیشرفته‌ای را ارائه می‌دهیم که هم کاربردی و هم مقرون‌به‌صرفه هستند.
          </p>
        </div>
        <div className="mt-5 flex-col justify-center items-center">
          <h3 className="text-red-500 text-center font-Vazir-Bold text-lg">
            به خانواده دیجی‌نکست بپیوندید
          </h3>
          <p className="text-justify font-Vazir-Thin text-sm py-3">
            چه علاقه مند به فناوری باشید چه فقط به دنبال چیز های جالب و کاربردی،
            دیجی‌نکست همه چیز دارد.
          </p>
          <div className="w-full flex justify-center items-center">
              <button className="text-white text-sm font-Vazir-Light bg-red-500 px-3 py-1 rounded-md">
                خرید شروع کنید
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
