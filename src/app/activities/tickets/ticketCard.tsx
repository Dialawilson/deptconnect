"use client";

import { useState, type ComponentType } from "react";
import Link from "next/link";
import {
    FaCalendar,
    FaTimeline,
    FaLocationDot,
    FaPeopleGroup,
    FaCircleInfo,
    FaCheck,
    FaGem,
    FaGraduationCap,
    FaTicket,
    FaXmark
} from "react-icons/fa6";

interface TicketProps {
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    description: string;
    attendees: number;
    capacity: number;
    progress: number;
    ticketTitle: string;
    standardTitle: string;
    standardDescription: string;
    vipTitle: string;
    vipDescription: string;
    stundentTitle: string;
    studentDescription: string;
    ticketDescription: string;
    icon: ComponentType<{ size: number; className?: string }>;
}

export default function TicketCard({
    title,
    date,
    time,
    location,
    category,
    description,
    attendees,
    capacity,
    icon: Icon,
    progress,
    standardTitle,
    vipTitle,
    vipDescription,
    stundentTitle,
    studentDescription,
    standardDescription,
}: TicketProps) {
    // This state now controls the toggle visibility
    const [showBenefits, setShowBenefits] = useState(false);
    const spotsLeft = capacity - attendees;

    const standardBenefits = [
        "Genral admission",
        "Welcome drink",
        "Event program",
        "Acess to networking area"
    ];

    const vipBenefits = [
        "Reserved front seating",
        "VIP lounge",
        "Permium dinner",
        "Meet & greet with speakers",
        "Event swag bag"
    ];

    const studentBenefits = [
        "General admission",
        "Welcome drink",
        "Event program",
        "Student discount",
    ];

    return (
        <div className="border p-4 rounded shadow">
            {/* Custom Animations Styling for Modal */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleUp {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out forwards;
                }
                .animate-scaleUp {
                    animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />

            <div className="flex">
                <div className="bg-[#489B3F] h-20 w-20 rounded flex items-center justify-center mr-4">
                    {Icon && <Icon size={50} className="text-white p-4" />}
                </div>
                <div className="flex justify-between gap-4 w-full">
                    <div>
                        <h3 className="text-lg font-bold">{title}</h3>
                        <div className="flex gap-1 items-center">
                            <FaCalendar size={20} className="text-[#489B3F] mr-2" />
                            <span>{date}</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaTimeline size={20} className="text-[#489B3F] mr-2" />
                            <span>{time}</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaLocationDot size={20} className="text-[#489B3F] mr-2" />
                            <span>{location}</span>
                        </div>
                    </div>
                    <div>
                        <span className="bg-[#489B34]/15 rounded py-1 px-1.5 text-xs font-semibold text-[#489B3F]">
                            {category}
                        </span>
                    </div>
                </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">{description}</p>

            <div className="mt-4 flex justify-between items-center">
                <div className="flex gap-1 items-center">
                    <FaPeopleGroup size={20} className="text-[#489B3F] mr-2" />
                    <span>{attendees} / {capacity} attendees</span>
                </div>
                <span>{spotsLeft} spots left</span>
            </div>

            <div className="bg-[#4B9B3F]/20 h-2 w-full rounded mt-4">
                <div className="bg-[#489B3F] h-2 rounded" style={{
                    height: "10px",
                    width: `${progress}%`
                }}></div>
            </div>
            <p className="my-8 font-semibold">Select ticket</p>

            <div className="flex-col flex gap-4">
                <div className="rounded border gap-2 p-4 px-4 w-full">
                    <div className="justify-between items-start mb-1">
                        <h3 className="font-semibold">{standardTitle}</h3>
                        <p className="mb-2 mt-2 text-sm text-gray-600">{standardDescription}</p>


                        {/* Conditionally render this only when showBenefits is true */}
                        {showBenefits && standardBenefits && (
                            <div className="bg-[#489B3F]/10 text-[#489B3F] my-4 text-xs font-semibold py-2 px-3 mt-2 rounded-xl animate-fadeIn animate-fadeOut transition-opacity duration-300">
                                <ul className="list-disc list-inside">
                                    {standardBenefits.map((benefit, index) => (
                                        <li key={index} className="mt-1 flex"><FaCheck className="mr-2" />{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <button className="bg-[#489B3F] w-full text-white py-2 px-4 rounded hover:bg-[#489B3F]/80 font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200">
                        <span>+</span> Select Ticket
                    </button>
                </div>

                {/* VIP Ticket Block */}
                <div className="rounded border gap-2 p-4 px-4 w-full relative overflow-hidden">
                    {/* <div className="absolute top-0 right-0 bg-[#489B3F]/10 text-[#489B3F] text-[9px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">
                        Premium
                    </div> */}
                    <div className=" justify-between items-start mb-1">
                        <h3 className="font-semibold">{vipTitle}</h3>
                        <p className="mb-2 text-sm text-gray-600">{vipDescription}</p>

                        {showBenefits && vipBenefits && (
                            <div className="bg-[#489B3F]/10 text-[#489B3F] my-4 text-xs font-semibold py-2 px-3 mt-2 rounded-xl animate-fadeIn animate-fadeOut transition-opacity duration-300">
                                <ul className="list-disc list-inside">
                                    {vipBenefits.map((benefit, index) => (
                                        <li key={index} className="mt-1 flex"><FaCheck className="mr-2" />{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                    <button className="bg-[#489B3F] w-full text-white py-2 px-4 rounded hover:bg-[#489B3F]/80 font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200">
                        <span>+</span> Select Ticket
                    </button>
                </div>

                {/* Student Ticket Block */}
                <div className="rounded border gap-2 p-4 px-4 w-full">
                    <div className="justify-between items-start mb-1">
                        <h3 className="font-semibold">{stundentTitle}</h3>
                        <p className="mb-2 text-sm text-gray-600">{studentDescription}</p>
                        {showBenefits && studentBenefits && (
                            <div className="bg-[#489B3F]/10 text-[#489B3F] my-4 text-xs font-semibold py-2 px-3 mt-2 rounded-xl animate-fadeIn animate-fadeOut transition-opacity duration-300">
                                <ul className="list-disc list-inside">
                                    {studentBenefits.map((benefit, index) => (
                                        <li key={index} className="mt-1 flex"><FaCheck className="mr-2" />{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <button className="bg-[#489B3F] w-full text-white py-2 px-4 rounded hover:bg-[#489B3F]/80 font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200">
                        <span>+</span> Select Ticket
                    </button>
                </div>

                <div className="flex justify-center items-center mt-6 border-t pt-4">
                    {/* Updated button to toggle state and dynamically change text */}
                    <button
                        onClick={() => setShowBenefits(!showBenefits)}
                        className="text-[#489B3F] hover:underline font-bold text-sm cursor-pointer"
                    >
                        {showBenefits ? "Show less" : "View all ticket details"}
                    </button>
                </div>
            </div>
        </div>
    )
}