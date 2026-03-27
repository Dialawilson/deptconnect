import {
    FaViadeo,
    FaTimeline,
    FaLocationDot
} from "react-icons/fa6"

interface CalenderCard{
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    description: string;
    icon: React.ComponentType<{ size: number; className: string }>;
}

export default function CalenderCard({
    title,
    date,
    time,
    location,
    category,
    description,
    icon: Icon,
}: CalenderCard) {
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
                      <FaViadeo size={20} className="text-[#489B3F] mr-2" />
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
        </div>
    );
}