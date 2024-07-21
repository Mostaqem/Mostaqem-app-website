import React from "react";
import Swiper from "../components/SwiperCom";
import { CiFacebook } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import FeatureCard from "../components/FeatureCard";
import {
  isIOS,
  isAndroid,
  isWindows,
  isMacOs,
  isLinux,
} from "react-device-detect";

import { IoLogoWindows } from "react-icons/io";
import { FaLinux } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import featuresData from "../data/CardsDataApi";

const Home = () => {
  return (
    <div className="min-h-[100vh] px-[3rem] py-[1.5rem] max-lg:p-[1rem]">
      <Swiper />

      <div className="flex items-center flex-col gap-4 my-[2rem]">
        <h1 className="text-3xl">قم بالتحميل الان</h1>
        <ul className="flex items-center justify-center gap-4 max-sm:flex-col">
          <li className="flex no-wrap items-center gap-2 bg-[#725142] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
            <p className="text-xl">انضم الينا</p>
            <CiFacebook className="text-2xl" />
          </li>

          {/* for Windows */}
          {isWindows && (
            <a href="#" target="_blank">
              <li className="flex no-wrap items-center gap-2 bg-[#ee8664] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
                <p className="text-xl">حمل الان</p>
                <IoLogoWindows className="text-xl" />
              </li>
            </a>
          )}

          {/* for macOs */}
          {isMacOs && (
            <a href="#" target="_blank">
              <li className="flex no-wrap items-center gap-2 bg-[#ee8664] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
                <p className="text-xl">سيتوفر لل MacOs قريباً</p>
                <FaCode className="text-xl" />
              </li>
            </a>
          )}

          {/* for Linux */}
          {isLinux && (
            <a href="#" target="_blank">
              <li className="flex no-wrap items-center gap-2 bg-[#ee8664] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
                <p className="text-xl">حمل الان</p>
                <FaLinux className="text-xl" />
              </li>
            </a>
          )}

          {/* for android */}
          {isAndroid && (
            <a href="#" target="_blank">
              <li className="flex no-wrap items-center gap-2 bg-[#ee8664] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
                <p className="text-xl">سيتوفر لل android قريباً</p>
                <FaCode className="text-xl" />
              </li>
            </a>
          )}

          {/* for ios */}
          {isIOS && (
            <a href="#" target="_blank">
              <li className="flex no-wrap items-center gap-2 bg-[#ee8664] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
                <p className="text-xl">سيتوفر لل ios قريباً</p>
                <FaCode className="text-xl" />
              </li>
            </a>
          )}

          <li className="flex no-wrap items-center gap-2 bg-black text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
            <p className="text-xl">GitHub</p>
            <FaGithub className="text-xl" />
          </li>
        </ul>
      </div>

      <div className="mx-auto mt-12 max-w-7xl sm:mt-12 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#fffaf5]/50 border-[#ee8664] border-solid border-[1px] px-6 py-16 text-center rounded-2xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-[#725142] sm:text-4xl">
            عن مستقيم
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
            مرحباً بك في مستقيم، التطبيق الأمثل للاستماع إلى القرآن الكريم.
            استمتع بتجربة استماع خالية من التشتت مع مكتبة غنية تشمل تلاوات
            لمختلف القراء. حمّل التطبيق الآن وابدأ رحلتك الروحية.
          </p>

          <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-x-6 gap-y-4 sm:max-w-xl sm:grid-cols-1 sm:gap-x-4 sm:gap-y-4 lg:max-w-4xl lg:grid-cols-3">
            <span className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-xl text-[#ee8664]" />
              <h4 className="text-xl text-black">مكتبة شاملة</h4>
            </span>
            <span className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-xl text-[#ee8664]" />
              <h4 className="text-xl text-black">جودة صوت عالية</h4>
            </span>
            <span className="flex items-center gap-2">
              <IoMdCheckmarkCircleOutline className="text-xl text-[#ee8664]" />
              <h4 className="text-xl text-black">واجهة مستخدم بديهية</h4>
            </span>
          </div>

        </div>
      </div>

      <div className=" mt-[3rem] mb-[2rem] flex flex-col items-center gap-4">
        <h1 className="text-3xl">تعرف علينا</h1>
        <div className="grid grid-cols-3 gap-4 mt-[0.5rem]  max-lg:grid-cols-2 max-md:grid-cols-1">
          {featuresData &&
            featuresData.map((item) => <FeatureCard {...item} key={item.id} />)}
          <div className="mt-4 flex flex-col items-center gap-4 p-[1rem] col-span-3 max-lg:col-span-2 max-md:col-span-1">
            <h1 className="text-3xl">من نحن</h1>
            <p className="text-center">
              نحن فريق من المطورين المتفانين، نسعى لتقديم تجربة استماع متميزة
              للقرآن الكريم عبر تطبيق "مستقيم". هدفنا هو توفير بيئة نقية
              وروحانية تتيح للمستخدمين الاستماع إلى القرآن بسهولة وسلاسة، مع
              التركيز على جودة الصوت وسهولة الاستخدام.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
