import logo from "@/assets/img/logo.png";
import Image from "next/image";
import { Instagram, Twitter, Linkedin } from "@deemlol/next-icons";
const Footer = () => {
    return (
        <>
         {/* FOOTER */}
          <footer className="bg-white w-full">
             <div className="flex flex-col lg:flex-row items-start justify-between p-10 gap-4">
          {/* Logo Column */}
          <div className="flex flex-col justify-between">
            <Image
              src={logo}
              alt="logo"
              className="max-w-25 max-h-25 object-contain"
            />
            <p className="text-[#0D0D0D] text-start -mt-8">
              Your Departmental Hub for Voting, Shopping and Transparency
            </p>
          </div>

          {/* Links & Newsletter */}
          <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-2 flex-1">
            {/* Company */}
            <div className="flex flex-col items-start lg:items-center p-2 gap-2 flex-1">
              <p className="text-[#489B3F]">Company</p>
              <p className="text-[#070707]">About us</p>
              <p className="text-[#070707]">Features</p>
              <p className="text-[#070707]">Activities</p>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-start lg:items-center p-2 gap-2 flex-1">
              <p className="text-[#489B3F]">Legal</p>
              <p className="text-[#070707]">Safety Tips</p>
              <p className="text-[#070707]">Terms of use</p>
              <p className="text-[#070707]">Privacy Policy</p>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-start lg:items-center p-2 gap-2 flex-1">
              <p className="text-[#489B3F]">Newsletter</p>
              <p className="text-[#070707] text-left">
                Stay updated with the latest DeptConnect activities and events.
              </p>
              <form className="text-gray-400 flex flex-col w-full gap-2">
                <input
                  type="text"
                  placeholder="Add Email"
                  className="bg-gray-200 p-2 rounded-md text-gray-900 focus:outline-none"
                />
                <button className="bg-[#489B3F] rounded-md p-2 text-white hover:bg-[#3e8836] transition">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-10 pb-10">
          <div className="border border-[#070707]" />
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row mx-auto px-10 justify-between gap-10 items-center pt-5 pb-5 w-full">
          <p className="text-[#070707]">Deptconnect © 2026</p>
          <div className="flex items-center gap-4">
            <p className="text-[#070707]">About</p>
            <p className="text-[#070707]">Contact</p>
            <p className="text-[#070707]">Privacy</p>
          </div>
          <div className="flex items-center gap-10">
            <Instagram size={24} className="text-[#070707]" />
            <Linkedin size={24} className="text-[#070707]" />
            <Twitter size={24} className="text-[#070707]" />
          </div>
        </div>
      </footer>
    </>
    );
}
export default Footer;