import { Link } from "react-router-dom";
import logo from "../assets/removed-bg-logo.png";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navigation = [
  { name: "الرئيسية", href: "/" },
  { name: "سياسة الخصوصية", href: "/privacy" },
  // { name: "التبرع", href: "/donation" },
];

export default function Footer() {
  return (
    <footer className="bg-[#fceedd]">
      <div className="flex items-center justify-center space-y-6 flex-col overflow-hidden px-8 pt-12 pb-4 ">
        <img src={logo} width={80} />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span className="flex gap-[15px]">
            <a href="https://github.com/Mostaqem">
              <FaGithub className="text-xl cursor-pointer text-[#725142]" />
            </a>
            <a href="https://www.facebook.com/mostaqemapp">
              <FaFacebook className="text-xl cursor-pointer text-[#725142]" />
            </a>
            <a href="https://x.com/mostaqemapp">
              <FaXTwitter className="text-xl cursor-pointer text-[#725142]" />
            </a>
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
        <div className="min-w-full flex items-center gap-2 justify-between max-lg:justify-center max-lg:flex-col">
          <p className="text-center text-s text-gray-400">
            &copy; {new Date().getFullYear()} مستقيم. كل الحقوق محفوظة.
          </p>

          <p className="text-center text-xs text-gray-400">
            site developed by
            <a href="mailto:eslamkhalil851@gmail.com" target="_blank">
              @IslamKhalil
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
