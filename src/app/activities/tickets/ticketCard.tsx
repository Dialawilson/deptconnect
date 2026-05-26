import type { ComponentType } from "react";

interface TicketProps{
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    description: string;
    attendees: number;
    capacity: number;
    progress: number;
    icon?: ComponentType<{ size?: number; className?: string }>;
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
    icon:Icon,
    progress,
}: TicketProps){
    const spotsLeft = capacity - attendees;

    return(
        <div className="border p-4 rounded shadow">
            <div className="flex">
                <div className="bg-[#489B3F] h-20 w-20 rounded flex itmes-center justify-center mr-4">
                    {Icon && <Icon size={50}
                className = "text-white p-4"/>    
                }
                </div>
                <div className="flex justify-between gap-4 w-full">
                    <div>
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}