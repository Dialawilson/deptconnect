// import Image from "next/image";
import hero from "@/assets/img/hero.jpg";

export default function Hero() {
  return (
    <>
    <main>
      <section
        className="relative bg-cover bg-center h-[80vh]"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center text-white">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to <span className="text-[#7ddc73]">DeptConnect</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Your department hub for voting, shopping, and secure transactions —
            all in one seamless platform.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-[#489B3F] hover:bg-[#3e8736] text-white px-6 py-3 rounded-md font-medium transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>

            <button className="bg-[#489B3F] hover:bg-[#3e8736] hover:text-white px-6 py-3 rounded-md font-medium transition-all">
              Login
            </button>
          </div>

        </div>
      </section>
    </main>
    </>

  );
}
