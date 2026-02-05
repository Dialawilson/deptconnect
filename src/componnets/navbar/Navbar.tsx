import Image from "next/image";
import logo from "../../assets/img/logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={90} height={90} priority />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <a
            href="#"
            className="hover:text-[#489B3F] transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-[#489B3F] transition-colors"
          >
            Shop
          </a>
          <a
            href="#"
            className="hover:text-[#489B3F] transition-colors"
          >
            Activities
          </a>
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-[#489B3F] hover:bg-[#3e8736] text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md">
            Login / Register
          </button>
        </div>

      </div>
    </nav>
  );
}
