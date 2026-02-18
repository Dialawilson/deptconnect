import Image from "next/image";
import shop from "@/assets/img/shop.jpg";
import vote from "@/assets/img/vote.jpg";
import cv from "@/assets/img/cv.jpg";
import event from "@/assets/img/event.jpg";
import { ArrowRightCircle } from "@deemlol/next-icons";

const features = [
  {
    title: "Shop",
    description: "Buy departmental products easily.",
    image: shop,
  },
  {
    title: "Vote",
    description: "Vote for your preferred candidate securely.",
    image: vote,
  },
  {
    title: "Events",
    description: "Stay updated with departmental activities.",
    image: event,
  },
  {
    title: "CV & Jobs",
    description: "Explore job opportunities and submit your CV.",
    image: cv,
  },
];

export default function Features() {
  return (
    <section className="md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Features
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Everything you need to stay connected with your department in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl md:p-8 p-4 shadow-sm hover:shadow-lg transition-all group"
            >
              {/* Arrow Icon */}
              <div className="absolute top-5 right-5 text-[#489B3F] opacity-10 group-hover:opacity-100 transition-opacity">
                <ArrowRightCircle size={26} />
              </div>

              {/* Image */}
              <div className="md:w-32 md:h-32 w-24 h-24 mx-auto rounded-full hover:shadow-lg hover:bg-white flex items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="mt-6 :w-12  text-lg font-semibold text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
          <div className="mt-4 text-2xl text-gray-600 text-center max-w-xl mx-auto">
            <p className="text-center">Online Payment, Pickup in Department</p>
          </div>

      </div>
    </section>
  );
}
