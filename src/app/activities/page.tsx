"use client"
import { useState } from "react"
import { FaCamera } from "react-icons/fa6"

export default function ActivitiesPage() {
    const [activities, setActivities] = useState("upcoming")
    return(
        <>
        <h1 className="font-extrabold text-4xl px-10 pt-20 text-[#489B3F]">Activities & Events</h1>
        <p className="px-10 pt-2">Stay connected with departmental workshops, seminars and social activities.</p>

        <div className="items-center rounded-3xl justify-content mx-9 bg-[#489B3F]/20  px-6 ">
            <div className="flex justify-center gap-4 mb-6 w-full">
                <button onClick={() => setActivities("upcoming")} className={`px-4 py-2 rounded-full w-full ${activities === "upcoming" ? "bg-[#489B3F] text-white" : "bg-gray-200 text-gray-700"}`}>
                    Upcoming
                </button>
                <button onClick={() => setActivities("calender")} className={`px-4 py-2 rounded-full w-full ${activities === "calender" ? "bg-[#489B3F] text-white" : "bg-gray-200 text-gray-700"}`}>
                    Calendar
                </button>
                <button onClick={() => setActivities("tickets")} className={`px-4 py-2 rounded-full w-full ${activities === "tickets" ? "bg-[#489B3F] text-white" : "bg-gray-200 text-gray-700"}`}>
                    Tickets
                </button>
            </div>
        </div>
        <div className="px-10">

        
            {activities === "upcoming" && (
                <div className="border p-4  rounded shadow ">
                    <div className="flex">
                        <div className="bg-[#489B3F]">
                            <FaCamera size={40} className="text-white p-4"/>
                        </div>

                    <h2 className="text-xl font-bold mb-2">Upcoming Activities</h2>
                    <p>Join us for our upcoming departmental activities and events. Stay tuned for workshops, seminars, and social gatherings designed to foster learning and community engagement.</p>
                    </div>
                </div>
            )}
            {activities === "calender" && (
                <div className=" border p-4 rounded shadow ">
                    <h2 className="text-xl font-bold mb-2">Activity Calendar</h2>
                    <p>Explore our activity calendar to stay informed about all the exciting events happening in our department. From academic workshops to social gatherings, there`s always something to look forward to!</p>
                </div>
            )}
            {activities === "tickets" && (
                <div className=" border p-4 rounded shadow ">
                    <h2 className="text-xl font-bold mb-2">Tickets & Registration</h2>
                    <p>Secure your spot for upcoming departmental activities and events. Check out our ticketing options and register now to be part of the vibrant community experience we offer.</p>
                </div>
            )}  
            </div>
        </>
    )
}