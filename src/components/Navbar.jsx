import logo from "../../src/assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full flex items-center justify-between 2xl:px-28 py-9  text-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} className="w-10" alt="" />
        <span>Saujana Voyage</span>
      </div>

      {/* Menu */}
      <div className="absolute left-1/2 -translate-x-1/2 text-base p-1 rounded-4xl border-white/40 border-y-2 bg-white/10  backdrop-blur-xs overflow-hidden">
        <ul className="flex items-center gap-x-2">
          <li className="bg-white text-black px-5 py-2 rounded-3xl">Home</li>
          <li className="px-5 py-2 rounded-3xl">Package</li>
          <li className="px-5 py-2 rounded-3xl">Gallery</li>
          <li className="px-5 py-2 rounded-3xl">How it works</li>
          <li className="px-5 py-2 rounded-3xl">Contact</li>
        </ul>
      </div>

      {/* Button */}
      <div className="flex items-center gap-x-3 rounded-full border-y border-white/40 bg-white/10 pl-4 pr-1 py-1 backdrop-blur-xs">
        <span className="text-white">Book Now</span>

        <span className="flex items-center justify-center rounded-full bg-white p-2 text-black">
          <ArrowUpRightIcon />
        </span>
      </div>
    </nav>
  );
};

const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrow-up-right"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
    />
  </svg>
);
export default Navbar;
