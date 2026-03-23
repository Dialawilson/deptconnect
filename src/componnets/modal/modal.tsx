"use client";

import Image from "next/image";
import { FaGoogle,  } from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import { useState } from "react";
import logo from "../../assets/img/logo.png";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AuthModal({ isOpen, onClose }: Props) {
  const [view, setView] = useState<"home" | "login" | "register">("home");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-87.5 p-6 rounded-xl relative"
        onClick={(e) => e.stopPropagation()}
        > 
        <div className="flex justify-center">
            
        <Image src={logo} alt="Logo" width={100} height={90} />
        </div>
        {/* Cancel Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>

        {/* Back Button */}
        {view !== "home" && (
          <button
            onClick={() => setView("home")}
            className="mb-4 text-sm text-gray-500"
          >
            ← Back
          </button>
        )}

        {/* Screens */}
        {view === "home" && (
          <div className="flex flex-col gap-4 h-1/2">
            <h2 className="text-xl font-semibold text-center">
              Sign in to unlock <br /> the best of DeptConnect
            </h2>
            <p className="text-center font-light">Your Departmental Hub for Voting, Shoping and Transparency </p>

            <button
              onClick={() => setView("login")}
              className="bg-[#489B3F] gap-3 rounded-4xl flex items-center justify-between px-5 text-white py-2 "
            >
              

              Continue with Google
                
                <FaGoogle/>
            </button>

            <button
              onClick={() => setView("register")}
              className="border py-2 rounded-4xl flex items-center justify-between px-5 text-gray-700"
            >
              Continue with Email 
              <MdEmail/>
            </button>
            <p className="text-center text-sm text-gray-500">
              By proceeding, you agree to our <span className="underline">Terms</span> and acknowledge our <span className="underline">Privacy Policy</span>.
            </p>
            <h3 className="text-centerm">Don`t have an account? <button onClick={() => setView("register")} className="text-[#489B3F] text-center font-bold">Sign up</button></h3>
          </div>
        )}

        {view === "login" && (
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Login</h2>

            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
            />

            <button className="bg-[#489B3F] text-white py-2 rounded">
              Sign In
            </button>
          </div>
        )}

        {view === "register" && (
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Register</h2>

            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
            />

            <button className="bg-[#489B3F] text-white py-2 rounded">
              Create Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
}