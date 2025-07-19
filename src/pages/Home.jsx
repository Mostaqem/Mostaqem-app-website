import Swiper from "../components/SwiperCom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FeatureCard from "../components/FeatureCard";
import MsStoreBadge from "../components/MsStoreBadge.jsx";
import GooglePlayBadge from "../components/GooglePlayBadge.jsx";
import { IoCopyOutline } from "react-icons/io5";
import {
  isIOS,
  isAndroid,
  isWindows,
  isMacOs,
  isLinux,
} from "react-device-detect";

import { useNavigate } from "react-router-dom";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

import { IoLogoWindows } from "react-icons/io";
import { FaLinux } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import macOsIcon from "../assets/macosIcon.png";

import featuresData from "../data/CardsDataApi";

const Home = () => {
  const navigate = useNavigate();
  const textToCopy = "yay -S mostaqem";

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Text copied to clipboard!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Failed to copy text.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleDownloadAndNavigateForMacOS = () => {
    window.location.href =
      "https://github.com/Mostaqem/mostaqem_desktop/releases/latest/download/mostaqem-macos.dmg";

    navigate("/guideMac");
  };

  return (
    <div className="min-h-[100vh] px-[3rem] py-[1.5rem] max-lg:p-[1rem]">
      <Swiper />

      <div className="flex items-center flex-col gap-4 my-[2rem]">
        <h1 className="text-3xl">قم بالتحميل الان</h1>
        <ul className="flex items-center justify-center gap-4 max-sm:flex-col">
          <a href="https://x.com/mostaqemapp">
            <li className="flex no-wrap items-center gap-2 bg-[#725142] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
              <FaXTwitter className="text-2xl" />
              <p className="text-xl">انضم الينا</p>
            </li>
          </a>

          {/* for Windows */}
          {isWindows && (
            <div className="flex gap-4 items-center">
              <li>
                <Menu as="div" className="relative inline-block text-left">
                  <div className="flex items-center justify-center gap-4">
                    <MenuButton className="inline-flex items-center justify-between min-w-[12rem] min-h-[2rem] bg-[#ee8664] rounded-xl px-[1.5rem] py-[0.4rem] text-center text-white">
                      <div className="flex no-wrap items-center gap-2">
                        <IoLogoWindows className="text-xl" />
                        <p className="text-xl">حمل الان</p>
                      </div>
                      <IoIosArrowDown className="" />
                    </MenuButton>
                    <MsStoreBadge />
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <a
                          href="https://github.com/Mostaqem/mostaqem_desktop/releases/latest/download/mostaqem-windows-exe.zip"
                          className="block px-4 py-2 text-sm text-gray-700  data-[focus]:bg-[#fcd29e] data-[focus]:text-gray-900"
                        >
                          Zip File
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="https://github.com/Mostaqem/mostaqem_desktop/releases/latest/download/mostaqem-windows-setup.exe"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#fcd29e] data-[focus]:text-gray-900"
                        >
                          Installer
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </li>
              <div>
                <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
                  <code className="text-green-400 font-mono">
                    winget install Mostaqem
                  </code>
                </pre>
              </div>
            </div>
          )}

          {/* for macOs */}
          {isMacOs && (
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex items-center justify-between min-w-[12rem] min-h-[2rem] bg-[#ee8664] rounded-xl px-[1.5rem] py-[0.4rem] text-center text-white">
                    <div className="flex no-wrap items-center gap-2">
                      {/* <FaLinux className="text-2xl" /> */}
                      <img src={macOsIcon} width={30} height={30} />
                      <p className="text-xl">حمل الان</p>
                    </div>
                    <IoIosArrowDown className="" />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        onClick={handleDownloadAndNavigateForMacOS}
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer data-[focus]:bg-[#fcd29e] data-[focus]:text-gray-900"
                      >
                        dmg.
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
          )}

          {/* for Linux */}
          {!isWindows && !isMacOs && !isAndroid && !isIOS && (
            <>
              <li>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex items-center justify-between min-w-[12rem] min-h-[2rem] bg-[#ee8664] rounded-xl px-[1.5rem] py-[0.4rem] text-center text-white">
                      <div className="flex no-wrap items-center gap-2">
                        <FaLinux className="text-2xl" />
                        <p className="text-xl">حمل الان</p>
                      </div>
                      <IoIosArrowDown className="" />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <a
                          href="https://github.com/Mostaqem/mostaqem_desktop/releases/latest/download/mostaqem-linux-x86_64.deb"
                          className="block px-4 py-2 text-sm text-gray-700  data-[focus]:bg-[#fcd29e] data-[focus]:text-gray-900"
                        >
                          deb.
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="https://github.com/Mostaqem/mostaqem_desktop/releases/latest/download/mostaqem-linux-x86_64.rpm"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#fcd29e] data-[focus]:text-gray-900"
                        >
                          rpm.
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="https://github.com/Mostaqem/mostaqem_desktop/releases/latest/download/mostaqem-linux-x86_64.tar.gz"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#fcd29e] data-[focus]:text-gray-900"
                        >
                          Tarball (tar.gz)
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="https://aur.archlinux.org/packages/mostaqem"
                          target="_blank"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#fcd29e] data-[focus]:text-gray-900"
                        >
                          AUR
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </li>
              <button
                onClick={handleCopyClick}
                className="flex no-wrap items-center justify-between min-w-[13rem] rounded-xl border-2 border-solid border-gray-150 px-[1rem] py-[0.4rem] cursor-pointer"
              >
                yay -S mostaqem
                <IoCopyOutline />
              </button>
            </>
          )}

          {/* for android */}
          {isAndroid && <GooglePlayBadge />}

          {/* for ios */}
          {isIOS && (
            <a href="#">
              <li className="flex no-wrap items-center gap-2 bg-[#ee8664] text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
                <p className="text-xl">سيتوفر لل ios قريباً</p>
                <FaCode className="text-xl" />
              </li>
            </a>
          )}

          <a href="https://github.com/Mostaqem">
            <li className="flex no-wrap items-center gap-2 bg-black text-white min-w-[6rem] min-h-[2rem] rounded-xl px-[2rem] py-[0.4rem] text-center cursor-pointer">
              <FaGithub className="text-xl" />
              <p className="text-xl">GitHub</p>
            </li>
          </a>
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
            <span className="flex items-center max-sm:items-start gap-2">
              <IoMdCheckmarkCircleOutline className="text-xl text-[#ee8664]" />
              <h4 className="text-xl text-black max-sm:text-start">
                مكتبة شاملة
              </h4>
            </span>
            <span className="flex items-center max-sm:items-start gap-2">
              <IoMdCheckmarkCircleOutline className="text-xl text-[#ee8664]" />
              <h4 className="text-xl text-black max-sm:text-start">
                جودة صوت عالية
              </h4>
            </span>
            <span className="flex items-center max-sm:items-start gap-2">
              <IoMdCheckmarkCircleOutline className="text-xl text-[#ee8664]" />
              <h4 className="text-xl text-black max-sm:text-start">
                واجهة مستخدم بديهية
              </h4>
            </span>
          </div>
        </div>
      </div>

      <div className=" mt-[3rem] mb-[2rem] flex flex-col items-center gap-4">
        <h1 className="text-3xl">تعرف علينا</h1>
        <div className="grid grid-cols-3 gap-4 mt-[0.5rem]  max-lg:grid-cols-2 max-md:grid-cols-1">
          {featuresData &&
            featuresData.map((item) => <FeatureCard {...item} key={item.id} />)}
        </div>
      </div>

      <div className="mt-4 flex flex-col h-[max-content] items-center gap-4 p-[1rem] col-span-3 max-lg:col-span-2 max-md:col-span-1">
        <h1 className="text-3xl">من نحن</h1>
        <p className="text-center max-w-[70%] max-lg:max-w-[100%]">
          نحن فريق من المطورين المتفانين، نسعى لتقديم تجربة استماع متميزة للقرآن
          الكريم عبر تطبيق "مستقيم". هدفنا هو توفير بيئة نقية وروحانية تتيح
          للمستخدمين الاستماع إلى القرآن بسهولة وسلاسة، مع التركيز على جودة
          الصوت وسهولة الاستخدام.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
