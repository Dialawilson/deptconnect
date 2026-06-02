"use client"
import { FaAward, FaCartShopping,  FaFilter } from "react-icons/fa6"
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
function Shop() {
    const [activeTab, setActiveTab] = useState("merchandise")
    return (
        <>
            <div className=" mx-auto px-4 sm:px-6 md:px-10 py-4  items-center justify-between   gap-4">
                <div className="flex  flex-col sm:flex-row  justify-between gap-4">

                    <div className="">
                        <h1 className="font-bold text-green text-2xl text-[#489B3F]">Department store</h1>
                        <p>Official merchandise and supplies</p>

                    </div>
                    {/* cart area */}
                    <div className="bg-[#489B3F]/50 px-4 py-1 rounded flex ">
                        <button className="flex items-center gap-4"> <FaCartShopping />cart</button>
                    </div>
                </div>
                {/* toggle buton  */}
                <div className="flex my-4 bg-[#489B3F]/50   px-4 py-2 rounded-full w-fit gap-4">
                <button className={activeTab === "merchandise" ? "bg-white px-4 py-2 rounded-full text-[#489B3F] flex items-center gap-2" : "text-black flex items-center gap-2 px-4 py-2 rounded-full"} onClick={() => setActiveTab("merchandise")}><FaAward/> Merchandise</button>
                <button className={activeTab === "pastQuestion" ? "bg-white px-4 py-2 rounded-full text-[#489B3F] flex items-center gap-2" : "text-black flex items-center gap-2 px-4 py-2 rounded-full"} onClick={() => setActiveTab("pastQuestion")}><FaCheckCircle/> Past Question</button>
                </div>
                <div className="flex gap-4">
                    <div className="bg-[#489B3F]/50 px-1 rounded-md w-2xl focus-within:ring-0.5  focus-within:border-blue-500">
                        <input type="search" placeholder="Search Product" className="w-fit focus:outline-none" name="" id="" />
                    </div>
                    <div className="flex gap-4 px-2 bg-[#489B3F]/50 rounded-md  items-center justify-center">
                        <FaFilter/>
                        <select className="appearance focus:outline-none cursor-pointer transition-all focus:ring-0.5  focus:border-blue-500">
                            <option>All</option>
                            <option value="">Crest</option>
                            <option value="">Lab Coat</option>
                            <option value="">Apparel</option>
                            <option value="">Stationaries</option>
                            <option value="">Accessories</option>
                            <option value="">Lab Equipments</option>
                            <option value="">Tech</option>
                            <option value="">books</option>
                        </select>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Shop