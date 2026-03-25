"use client";

import Image from "next/image";
import logo from "../../assets/img/logo.png";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "../modal/modal";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
          
          {/* Logo */}
          <div className="flex items-center">
            <Image src={logo} alt="Logo" width={90} height={90} priority />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
            <Link href="#">Home</Link>
            <Link href="/voting">Voting</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/activities">Activities</Link>
          </div>

          {/* Button */}
          <div>
            <button
              onClick={() => setOpenModal(true)}
              className="bg-[#489B3F] hover:bg-[#3e8736] text-white px-5 py-2.5 rounded-full"
            >
              Login / Register
            </button>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <AuthModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}