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
  const [view, setView] = useState<"home" | "login" |"forgot-password" | "register">("home");

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
          className="absolute cursor-pointer top-3 right-3 text-gray-500"
        >
          ✕
        </button>

        {/* Back Button */}
        {view !== "home" && (
          <button
            onClick={() => setView("home")}
            className="mb-4 hover:text-[#489B3F] cursor-pointer text-sm text-gray-500"
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
              onClick={() => setView("login")}
              className="border py-2 rounded-4xl flex items-center justify-between px-5 text-gray-700"
            >
              Continue with Email 
              <MdEmail/>
            </button>
            <p className="text-center text-sm text-gray-500">
              By proceeding, you agree to our <span className="underline">Terms</span> and acknowledge our <span className="underline">Privacy Policy</span>.
            </p>
            <h3 className="text-centerm">Don`t have an account? <button onClick={() => setView("register")} className="text-[#489B3F] text-center font-bold cursor-pointer">Sign up</button></h3>
          </div>
        )}

        {view === "login" && (
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Welcome Back</h2>
            <p>Sign in with your email and password to continue.</p>

            <label htmlFor="email">Email</label>
            <input
            name="email"
              type="email"
              placeholder="name@example.com"
              className="border p-2 rounded"
            />
            <label htmlFor="password" className="flex justify-between">Password  <button className="font-bold text-[#489B3F] cursor-pointer text-center" onClick={()=>setView("forgot-password")}>forgot password</button></label>
            <input
              name="password" 
              type="password"
              placeholder="Enter your password"
              className="border p-2 rounded"
            />

            <button  className="bg-[#489B3F] cursor-pointer text-white py-2 rounded">
              Sign In
            </button>
            <span className="flex gap-1.5">

            <p>Remember your password? </p><button className="text-[#489B3F] cursor-pointer font-bold" onClick={() => setView("login")}>Sign in</button>
            </span>
          </div>
        )}
        {
          view === "forgot-password" &&(
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Forgot Password</h2>
              <p>Enter your email to receive password reset instructions.</p>

              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="border p-2 rounded"
              />

              <button className="bg-[#489B3F] cursor-pointer text-white py-2 rounded">
                Send Reset Link
              </button>
            </div>
          ) 
        }

        {view === "register" && (
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Create an account</h2>
            <p>Join to explore DepConnect features</p>
          
            <div className="flex gap-3">
<label htmlFor="name">First Name

            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded w-full"
              />
              </label>
           <label htmlFor="last-name">Last Name
             <input
              type="text"
              placeholder="Last Name"
              className="border p-2 w-full rounded"
            />
           </label>
              </div>
              <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="border p-2 rounded"
            />
            <label htmlFor="password">State</label>
            <input
              type="text"
              placeholder="Enter your state"
              className="border p-2 rounded"
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your password"
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