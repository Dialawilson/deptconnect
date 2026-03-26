"use client";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import ActivityCard from "./activiteCard";
import CustomDatePicker from "./calender";
export default function ActivitiesPage() {
  const [activities, setActivities] = useState("upcoming");
  const [date, setDate] = useState<Date | null>(null);
//  
  return (
    <>
      <h1 className="font-extrabold text-4xl px-10 pt-20 text-[#489B3F]">
        Activities & Events
      </h1>
      <p className="px-10 pt-2">
        Stay connected with departmental workshops, seminars and social
        activities.
      </p>
      <div className="items-center rounded-3xl mt-4 justify-content mx-9 bg-[#489B3F]/20  px-6 ">
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

      <div className="md:px-10  flex flex-col gap-2.5">
        {activities === "upcoming" && (
            <>
          <ActivityCard
                      title="Upcoming Activity"
                      date="Wednesday, January 28, 2024"
                      time="3:00 PM - 5:00 PM"
                      location="Virtual (zoom)"
                      category="seminar"
                      description="Join us for our upcoming departmental activities and events. Stay tuned for workshops, seminars, and social gatherings designed to foster learning and community engagement."
                      attendees={50}
                      capacity={100}
                      progress={50} 
                      icon={FaCamera }          />

                    <ActivityCard
                      title="Upcoming Activity"
                      date="Wednesday, January 28, 2024"
                      time="3:00 PM - 5:00 PM"
                      location="Virtual (zoom)"
                      category="seminar"
                      description="Join us for our upcoming departmental activities and events. Stay tuned for workshops, seminars, and social gatherings designed to foster learning and community engagement."
                      attendees={90}
                      capacity={100}
                      progress={70} 
                      icon={FaCamera }/>
        </>
        )}
        {activities === "calender" && (
           <CustomDatePicker
           selectedDate={date}
           onChange={(d) => setDate(d)}
           placeholder="Select a date"
           showTime={true}
         />
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
