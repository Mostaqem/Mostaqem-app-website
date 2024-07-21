import React from "react";
import Swiper from "../components/SwiperCom";
import { CiFacebook } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import imageApp from "../assets/app.png";
import FeatureCard from "../components/FeatureCard";

const Data = [
  {
    id: 1,
    image: imageApp,
    title: "هنا سوف تكتب الميزه",
    desc: "هنا وصف بسيط للميزه هنا وصف بسيط للميزه هنا وصف بسيط للميزه ",
  },
  {
    id: 2,
    image: imageApp,
    title: "هنا سوف تكتب الميزه",
    desc: "هنا وصف بسيط للميزه هنا وصف بسيط للميزه هنا وصف بسيط للميزه ",
  },
  {
    id: 3,
    image: imageApp,
    title: "هنا سوف تكتب الميزه",
    desc: "هنا وصف بسيط للميزه هنا وصف بسيط للميزه هنا وصف بسيط للميزه ",
  },
  {
    id: 4,
    image: imageApp,
    title: "هنا سوف تكتب الميزه",
    desc: "هنا وصف بسيط للميزه هنا وصف بسيط للميزه هنا وصف بسيط للميزه ",
  },
  {
    id: 5,
    image: imageApp,
    title: "هنا سوف تكتب الميزه",
    desc: "هنا وصف بسيط للميزه هنا وصف بسيط للميزه هنا وصف بسيط للميزه ",
  },
  {
    id: 6,
    image: imageApp,
    title: "هنا سوف تكتب الميزه",
    desc: "هنا وصف بسيط للميزه هنا وصف بسيط للميزه هنا وصف بسيط للميزه ",
  },
  {
    id: 7,
    image: imageApp,
    title: "هنا سوف تكتب الميزه",
    desc: "هنا وصف بسيط للميزه هنا وصف بسيط للميزه هنا وصف بسيط للميزه ",
  },
  {
    id: 8,
    image: imageApp,
    title: "هنا سوف تكتب الميزه",
    desc: "هنا وصف بسيط للميزه هنا وصف بسيط للميزه هنا وصف بسيط للميزه ",
  },
];

const Home = () => {
  return (
    <div className="min-h-[100vh] px-[3rem] py-[1.5rem] max-lg:p-[1rem]">
      <Swiper />

      <div className="flex items-center flex-col gap-4 my-[2rem]">
        <h1 className="text-3xl">قم بالتحميل الان</h1>
        <ul className="flex items-center justify-center gap-4 max-sm:flex-col">
          <li className="flex no-wrap items-center gap-2 bg-[#725142] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
            <p className="text-xl">انضم الينا</p>
            <CiFacebook className="text-xl" />
          </li>
          <li className="flex no-wrap items-center gap-2 bg-[#ee8664] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
            <p className="text-xl">حمل الان</p>
            <CiSaveDown2 className="text-xl" />
          </li>
          <li className="flex no-wrap items-center gap-2 bg-black text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
            <p className="text-xl">GitHub</p>
            <FaGithub className="text-xl" />
          </li>
        </ul>
      </div>

      <div className=" my-[3rem] flex flex-col items-center gap-4">
        <h1 className="text-3xl">تعرف علينا</h1>
        <div className="grid grid-cols-3 gap-4 mt-[0.5rem]  max-lg:grid-cols-2 max-md:grid-cols-1">
          {Data && Data.map((item) => <FeatureCard {...item} key={item.id} />)}
          <div className="mt-4 shadow-lg flex flex-col items-start gap-2 bg-[#ffff] rounded-md p-[1rem] border-[#fceedd] border-solid border-[2px] col-span-3  max-lg:col-span-2 max-md:col-span-1">
            <h1 className="text-xl">عنوان</h1>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع.
            </p>
          </div>
          <div className="mt-4 shadow-lg flex flex-col items-start gap-2 bg-[#ffff] rounded-md p-[1rem] border-[#fceedd] border-solid border-[2px] col-span-3  max-lg:col-span-2 max-md:col-span-1">
            <h1 className="text-xl">عنوان</h1>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
