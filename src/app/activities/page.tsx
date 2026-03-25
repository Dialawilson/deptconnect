"use client";
import { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { FaCamera, FaTimeline, FaLocationDot, FaPeopleGroup } from "react-icons/fa6";

export default function ActivitiesPage() {
  const [activities, setActivities] = useState("upcoming");
  return (
    <>
      <h1 className="font-extrabold text-4xl px-10 pt-20 text-[#489B3F]">
        Activities & Events
      </h1>
      <p className="px-10 pt-2">
        Stay connected with departmental workshops, seminars and social
        activities.
      </p>
      <div className="items-center rounded-3xl justify-content mx-9 bg-[#489B3F]/20  px-6 ">
        <div className="flex justify-center gap-4 mb-6 w-full">
          <button
            onClick={() => setActivities("upcoming")}
            className={`px-4 py-2 rounded-full w-full ${activities === "upcoming" ? "bg-[#489B3F] text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActivities("calender")}
            className={`px-4 py-2 rounded-full w-full ${activities === "calender" ? "bg-[#489B3F] text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Calendar
          </button>
          <button
            onClick={() => setActivities("tickets")}
            className={`px-4 py-2 rounded-full w-full ${activities === "tickets" ? "bg-[#489B3F] text-white" : "bg-gray-200 text-gray-700"}`}
          >
            Tickets
          </button>
        </div>
      </div>

      <div className="px-10">
        {activities === "upcoming" && (
          <div className="border p-4  rounded shadow ">
            <div className="flex">
              <div className="bg-[#489B3F] h-20 w-20 rounded flex items-center justify-center mr-4">
                <FaCamera size={50} className="text-white p-4" />
                {/* <FaViadeo size={50} className="text-white p-4"/> */}
              </div>
              <div className="flex justify-between gap-4 w-full">
                <div className="">
                  <h2 className="text-xl font-bold mb-2">
                    Upcoming Activities
                  </h2>
                  <div className="flex gap-1 items-center">
                    <FaCalendar size={20} className="text-[#489B3F] mr-2" />
                    <span className="py-1 px-1.5">
                      Wednesday, January 28, 2024
                    </span>
                  </div>
                  {/* time */}
                  <div className="flex gap-1 items-center">
                    <FaTimeline size={20} className="text-[#489B3F] mr-2" />
                    <span className="py-1 px-1.5">
                      3:00 PM - 5:00 PM
                    </span>
                  </div>
                    {/* location */}
                    <div className="flex gap-1 items-center">
                    <FaLocationDot size={20} className="text-[#489B3F] mr-2" />
                    <span className="py-1 px-1.5">
                      Virtual (zoom)
                    </span>
                  </div>
                </div>
                <div>
                  <span className="bg-[#489B3F]/15 rounded py-1 px-1.5">
                    seminar
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6">
              Join us for our upcoming departmental activities and events. Stay
              tuned for workshops, seminars, and social gatherings designed to
              foster learning and community engagement.
            </p>
            <div className="mt-4 flex justify-between items-center">
                <div className="flex gap-1 items-center ">
                    <FaPeopleGroup size={20} className="text-[#489B3F] mr-2 " />
                    <span className="py-1 px-1.5">
                      50/100 attendees
                    </span>
                </div>
                    <span>33 spots available</span>
            </div>
          </div>
        )}
        {activities === "calender" && (
          <div className=" border p-4 rounded shadow ">
            <h2 className="text-xl font-bold mb-2">Activity Calendar</h2>
            <p>
              Explore our activity calendar to stay informed about all the
              exciting events happening in our department. From academic
              workshops to social gatherings, there`s always something to look
              forward to!
            </p>
          </div>
        )}
        {activities === "tickets" && (
          <div className=" border p-4 rounded shadow ">
            <h2 className="text-xl font-bold mb-2">Tickets & Registration</h2>
            <p>
              Secure your spot for upcoming departmental activities and events.
              Check out our ticketing options and register now to be part of the
              vibrant community experience we offer.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
