import { Link } from "react-router-dom";
import logo from "../assets/removed-bg-logo.png";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const navigation = [
  { name: "الرئيسية", href: "/" },
  { name: "سياسة الخصوصية", href: "/PrivacyPolicy" },
  { name: "التبرع", href: "/donation" },
];

export default function Footer() {
  return (
      <footer className="bg-[#fceedd]">
      <div className="flex items-center justify-center space-y-6 flex-col overflow-hidden px-8 pt-12 pb-4 ">
        <img src={logo} width={80} />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span className="flex gap-[10px]">
            <FaGithub className="text-xl cursor-pointer text-[#725142]" />
            <FaFacebook className="text-xl cursor-pointer text-[#725142]" />
          </span>
        </div>
        <nav aria-label="Footer" className="flex justify-center items-center">
          {navigation.map((item) => (
            <div key={item.name} className="pb-6 w-[max-content]">
              <Link
                key={item.name}
                to={item.href}
                className="text-md text-center mx-2  text-[#725142]"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-s text-gray-400">
          &copy; 2024 مستقيم. كل الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
