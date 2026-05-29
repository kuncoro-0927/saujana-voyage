import { useEffect, useState } from "react";
import logo from "../../src/assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Package", "Gallery", "How it works", "Contact"];

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 lg:top-0 lg:left-0 lg:right-0 z-60">
        {/* TOP BAR */}
        <div
          className={`transition-all duration-300 ${
            isScrolled || isOpen
              ? "bg-black/40 backdrop-blur-2xl rounded-full py-4"
              : "bg-transparent py-4"
          }`}
        >
          <div className="flex items-center justify-between px-5 lg:px-16 2xl:px-28 text-white">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} className="w-8 lg:w-10" alt="Logo" />

              <span className="text-sm sm:text-base font-medium">
                Saujana Voyage
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-base p-1 rounded-4xl border-white/40 border-y-2 bg-white/10 backdrop-blur-xs overflow-hidden">
              <ul className="flex items-center gap-x-2">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`px-5 py-2 rounded-3xl transition-all duration-300 cursor-pointer ${
                      index === 0 ? "bg-white text-black" : "hover:bg-white/10"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center gap-x-3 rounded-full border-y border-white/40 bg-white/10 pl-4 pr-1 py-1 backdrop-blur-xs">
              <span className="text-white">Book Now</span>

              <span className="flex items-center justify-center rounded-full bg-white p-2 text-black">
                <ArrowUpRightIcon />
              </span>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1"
            >
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />

              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity,margin] duration-300 ${
            isOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-4">
            <ul className="flex flex-col gap-2 text-white">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`rounded-2xl px-4 py-3 transition-all duration-300 ${
                    index === 0 ? "bg-white text-black" : "hover:bg-white/10"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl bg-white text-black py-3">
              Book Now
              <ArrowUpRightIcon />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
    />
  </svg>
);

export default Navbar;
