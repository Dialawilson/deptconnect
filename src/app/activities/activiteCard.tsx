import {
  FaCalendar,
  FaTimeline,
  FaLocationDot,
  FaPeopleGroup,
} from "react-icons/fa6";

interface ActivityCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  attendees: number;
  capacity: number;
  progress: number;
  icon: React.ComponentType<{ size: number; className: string }>;
}

export default function ActivityCard({
  title ,
  date,
  time,
  location,
  category,
  description,
  attendees,
  capacity,
  progress,
  icon: Icon,
}: ActivityCardProps) {
  const spotsLeft = capacity - attendees;

  return (
    <div className="border p-4 rounded shadow">
      <div className="flex">
        <div className="bg-[#489B3F] h-20 w-20 rounded flex items-center justify-center mr-4">
          {Icon && <Icon size={50} className="text-white p-4" />}
        </div>

        <div className="flex justify-between gap-4 w-full">
          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>

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
            <span className="bg-[#489B3F]/15 rounded py-1 px-1.5">
              {category}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6">{description}</p>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <FaPeopleGroup size={20} className="text-[#489B3F] mr-2" />
          <span>
            {attendees}/{capacity} attendees
          </span>
        </div>
        <span>{spotsLeft} spots available</span>
      </div>

      <div className="bg-[#489B3F]/20 w-full mt-2">
        <div
          style={{
            width: `${progress}%`,
            background: "#489B3F",
            height: "10px",
          }}
        />
      </div>
    </div>
  );
}