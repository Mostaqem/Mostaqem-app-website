import { Link } from "react-router-dom";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-[3rem] py-[1.5rem] max-lg:p-[1rem] bg-gradient-to-br from-[#fffaf5] to-[#fceedd]/30">
      {/* Main Container with Card Style */}
      <div className="relative max-w-2xl w-full">
        {/* Background Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#ee8664]/20 to-[#725142]/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#fceedd]/40 to-[#ee8664]/20 rounded-full blur-2xl"></div>
        
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-white to-[#fceedd]/30 rounded-3xl p-8 max-sm:p-6 
                        shadow-lg border border-[#fceedd]/50 backdrop-blur-sm overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23725142' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`
                 }}>
            </div>
          </div>

          <div className="relative z-10 text-center">
            {/* 404 Large Number with Enhanced Design */}
            <div className="relative mb-6">
              {/* Animated Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 max-sm:w-32 max-sm:h-32 bg-gradient-to-br from-[#ee8664]/10 to-[#725142]/5 rounded-full animate-pulse"></div>
              </div>
              
              {/* Error Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <MdErrorOutline className="text-[90px] text-[#ee8664] max-sm:text-[70px] drop-shadow-lg animate-bounce" style={{animationDuration: '3s'}} />
              </div>
              
              {/* 404 Number */}
              <h1 className="text-[160px] font-bold text-[#ee8664] opacity-15 leading-none max-sm:text-[110px] 
                             bg-gradient-to-br from-[#ee8664] to-[#725142] bg-clip-text">
                404
              </h1>
            </div>

            {/* Error Message with Enhanced Typography */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-[#725142] mb-4 max-sm:text-3xl 
                             bg-gradient-to-r from-[#725142] to-[#ee8664] bg-clip-text text-transparent">
                الصفحة غير موجودة
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#ee8664] to-[#725142] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-[#725142]/80 mb-6 max-w-md mx-auto max-sm:text-base leading-relaxed">
                عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تكون الصفحة قد حُذفت أو تم نقلها أو أن الرابط غير صحيح.
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                to="/"
                className="group flex items-center gap-3 bg-gradient-to-r from-[#ee8664] to-[#d97755] 
                           text-white px-8 py-4 rounded-2xl hover:from-[#d97755] hover:to-[#c86644] 
                           transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                           border border-[#ee8664]/20"
              >
                <IoHomeOutline className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg font-medium">العودة للصفحة الرئيسية</span>
              </Link>
              
              <button
                onClick={() => window.location.reload()}
                className="group flex items-center gap-3 bg-white text-[#725142] px-8 py-4 rounded-2xl 
                           hover:bg-[#fceedd] transition-all duration-300 transform hover:scale-105 
                           border-2 border-[#fceedd] hover:border-[#ee8664]/30 hover:shadow-md"
              >
                <BiRefresh className="text-xl group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-lg font-medium">إعادة التحميل</span>
              </button>
            </div>

            {/* Enhanced Quick Links */}
            <div className="bg-gradient-to-r from-[#fceedd]/30 to-[#fffaf5]/50 rounded-2xl p-6 border border-[#fceedd]/50">
              <div className="flex items-center justify-center gap-2 mb-4">
                <IoSearchOutline className="text-[#725142] text-xl" />
                <p className="text-[#725142] font-medium">أو يمكنك زيارة:</p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/privacy"
                  className="group flex items-center gap-2 text-[#725142] hover:text-[#ee8664] 
                             px-4 py-2 rounded-xl hover:bg-white/50 transition-all duration-300
                             border border-transparent hover:border-[#ee8664]/20"
                >
                  <span className="relative">
                    سياسة الخصوصية
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ee8664] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
                <Link
                  to="/guide-mac"
                  className="group flex items-center gap-2 text-[#725142] hover:text-[#ee8664] 
                             px-4 py-2 rounded-xl hover:bg-white/50 transition-all duration-300
                             border border-transparent hover:border-[#ee8664]/20"
                >
                  <span className="relative">
                    دليل التثبيت لنظام macOS
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ee8664] group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Corner Decorative Elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-[#ee8664] rounded-full opacity-20"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-[#725142] rounded-full opacity-30"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#fceedd] rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;