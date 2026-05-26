"use client";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import ActivityCard from "./activiteCard";
import CalenderCard from "./calenderCard";
import DateCalendarFormProps from "./calender";
import TicketCard from "./tickets/ticketCard";
// import CustomDatePicker from "./calender";
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
                      icon={FaCamera }
                      />
        </>
        )}
        {activities === "calender" && (
            <>
            <div className=" border p-4  flex gap-2.5 ">

            <div>
           {/* <CustomDatePicker
           selectedDate={date}
           onChange={(d) => setDate(d)}
           placeholder="Select a date"
           showTime={true}
           /> */}
           {/* <input type="datetime-local" name="" id="" /> */}
           <DateCalendarFormProps/>
           
           </div>
           <div className="flex">
              <CalenderCard
                title="Activity Title"
                date="January 28, 2024"
                time="3:00 PM - 5:00 PM"
                location="Virtual (zoom)"
                category="seminar"
                description="Join us for our upcoming departmental activities and events. Stay tuned for workshops, seminars, and social gatherings designed to foster learning and community engagement."
                icon={FaCamera}
               />
               
           </div>
           </div>
       </>
        )}
        {activities === "tickets" && (
          <div className=" border p-4 rounded shadow ">
            <TicketCard/>
          </div>
        )}
      </div>
    </>
  );
}
