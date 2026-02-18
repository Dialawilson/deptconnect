import hero from "@/assets/img/voters.png";
import vote from "@/assets/img/vote2.png";
import Image from "next/image";
import { ArrowRightCircle, Bell, Calendar, Star } from "@deemlol/next-icons";

const ACTIVITIES = [
  {
    icon: <Bell />,
    title: "Orientation Update",
    description: "New students are invited to the departmental orientation program to learn about academic guidelines, lab requirements, and departmental expectations.",
  },
  {
    icon: <Calendar />,
    title: "Departmental Week",
    description: "Get ready for a full week of activities including games, pageantry, seminars, and social events. Come out and connect with classmates.",
  },
  {
    icon: <Star />,
    title: "Pageantry Registration",
    description: "Think you’ve got the confidence and charisma? Sign up for Mr & Miss Department and compete for the crown. Registration closes soon!",
  },
];

export default function Activities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Announcements & Activities
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 w-full">
          
          {/* Left Column: Activities */}
          <div className="flex flex-col gap-6 md:w-1/2">
            {ACTIVITIES.map((activity, index) => (
              <div
                key={index}
                className="group rounded-xl border border-green-500 p-6 flex flex-col gap-4 hover:shadow-lg transition-all cursor-pointer bg-white"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-[#489B3F] bg-green-50 p-2 rounded-full">
                      {activity.icon}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 capitalize">
                      {activity.title}
                    </h3>
                  </div>
                  <span className="text-[#489B3F] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRightCircle />
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Voting Card Overlay */}
          <div
            className="w-full md:w-1/2 rounded-2xl bg-cover bg-center min-h-[450px] relative overflow-hidden flex items-end p-8"
            style={{ backgroundImage: `url(${hero.src})` }}
          >
            {/* Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <div className="relative z-10 w-full text-white flex flex-col gap-4 justify-center items-center">
              <Image src={vote} alt="vote icon" width={60} height={60} className="mb-2" />
              
              <div>
                <h3 className="text-2xl font-bold">Secure Online Voting</h3>
                <p className="text-gray-200 text-sm">Make your voice heard in this years elections.</p>
              </div>

              <div className="space-y-3 my-2">
                <p className="font-medium text-green-400 text-center">Vote for:</p>
                
                <label className="flex items-center gap-3 cursor-pointer group/item">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#489B3F] cursor-pointer"/>
                  <span className="text-sm group-hover/item:text-green-300 transition-colors">Mr & Miss Department</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group/item">
                  <input type="checkbox" defaultChecked  className="w-5 h-5 accent-[#489B3F] cursor-pointer"/>
                  <span className="text-sm group-hover/item:text-green-300 transition-colors">Departmental Executives</span>
                </label>
              </div>

              <button className="w-fit mt-2 bg-[#489B3F] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg uppercase text-xs tracking-widest">
                Vote Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}