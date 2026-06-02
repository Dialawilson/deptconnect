"use client";
import Image from "next/image";
import secure from "../../assets/img/secure.png";
import james from "../../assets/img/james.png";
import michael from "../../assets/img/michael.jpg";
import Aisha from "../../assets/img/Aisha.jpg";
import logo from "../../assets/img/logo.png";
import {
  Cast,
  Users,
  BarChart,
  Instagram,
  Linkedin,
  Twitter,
} from "@deemlol/next-icons";
import { useState } from "react";

function VotingPage() {
  const [activeTab, setActiveTab] = useState("cast");
  return (
    <div className="w-full max-w-7xl text-left flex flex-col items-center justify-center mx-auto px-4 sm:px-6 md:px-10 py-4">
      {/* HERO */}
      <div className="relative w-full py-6">
        <Image
          src={secure}
          alt="Hero Image"
          className="w-full h-62.5 sm:h-87.5 md:h-112.5 object-cover rounded-md blur-[2px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4">
            Voting & Elections
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg mb-6">
            Cast your vote for the next departmental{" "}
            <br className="hidden sm:block" /> leaders
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className="w-full bg-white py-6">
        <div className="flex justify-between bg-[#489B3F73] p-3 sm:p-4 rounded-md text-sm sm:text-base">
          <div className="flex ">
            <button
              className={` flex text-center gap-2 items-center  px-3 py-2 rounded-md ${activeTab === "cast" ? "bg-[#489B3F] text-white" : "bg-white text-black"}`}
              onClick={() => setActiveTab("cast")}
            >
              <Cast size={24} className="text-black" />
              Cast Vote
            </button>
          </div>

          <div className="flex gap-2 items-center px-3 py-2">
            <button
              className={`text-black flex text-center gap-2 items-center  px-3 py-2 rounded-md ${activeTab === "campaigns" ? "bg-[#489B3F] text-white" : "bg-white text-black"}`}
              onClick={() => setActiveTab("campaigns")}
            >
              <Users size={24} className="text-black" />
              Campaigns
            </button>
          </div>

          <div className="flex gap-2 items-center px-3 py-2">
            <button
              className={`text-black flex text-center gap-2 items-center  px-3 py-2 rounded-md ${activeTab === "results" ? "bg-[#489B3F] text-white" : "bg-white text-black"}`}
              onClick={() => setActiveTab("results")}
            >
              <BarChart size={24} className="text-black" />
              Results
            </button>
          </div>
        </div>
      </div>

      {/* ELECTION */}
      <div className="w-full bg-white px-4 py-6">
        <div className="w-full mx-auto border border-black rounded-md">
          {activeTab === "cast" && (
            <div className="flex flex-col justify-start items-start p-2 md:p-6  gap-6">
              <p className="text-black font-bold">
                Departmental president election
              </p>

              <p className="text-black text-sm sm:text-base">
                Select one candidate to vote for. Your vote is anonymous and
                final
              </p>

              {/* Candidate 1 */}
              <div className="flex flex-row md:flex-col lg:flex-row items-center gap-2 md:gap-4 p-1 md:p-4 w-full border border-black rounded-md">
                <Image
                  src={james}
                  alt="Sarah James"
                  className="rounded-full md:rounded-md lg:rounded-full md:w-full md:h-50 w-20 h-20 lg:w-24 lg:h-24 object-cover"
                />
                <div className="flex flex-row md:flex-row lg:flex-col gap-4 p-4 items-center md:items-start w-full">
                  <div className="text-left">
                    <p className="text-black font-bold">
                      Sarah James <br />
                      <span className="font-light text-sm">400 level</span>
                    </p>
                  </div>
                  <p className="text-black font-light text-sm text-start">
                    I will advocate for better laboratory equipment, organize
                    regular tech workshops, and establish mentorship programs
                    connecting students with industry professionals
                  </p>
                </div>
              </div>

              {/* Candidate 2 */}
              <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4 p-4 w-full border border-black rounded-md">
                <Image
                  src={michael}
                  alt="Micheal Agunwa"
                  className="rounded-full md:rounded-md lg:rounded-full md:w-full md:h-50 w-20 h-20 lg:w-24 lg:h-24 object-cover"
                />
                <div className="flex flex-row md:flex-row lg:flex-col gap-2 md:gap-4 p-1 md:p-4 items-center md:items-start w-full">
                  <div className="text-left">
                    <p className="text-black font-bold">
                      Micheal Agunwa <br />
                      <span className="font-light text-sm">400 level</span>
                    </p>
                  </div>
                  <p className="text-black font-light text-sm text-start">
                    My focus is on improving students welfare, creating more
                    internship opportunities and fostering a collaborative
                    learning environment through study groups and peer support
                  </p>
                </div>
              </div>

              {/* Candidate 3 */}
              <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4 p-4 w-full border border-black rounded-md">
                <Image
                  src={Aisha}
                  alt="Aisha Barakat"
                  className="rounded-full md:rounded-md lg:rounded-full md:w-full md:h-50 w-20 h-20 lg:w-24 lg:h-24 object-cover"
                />
                <div className="flex flex-row md:flex-row lg:flex-col gap-2 md:gap-4 p-1 md:p-4 items-center md:items-start w-full">
                  <div className="text-left">
                    <p className="text-black font-bold">
                      Aisha Barakat <br />
                      <span className="font-light text-sm">400 level</span>
                    </p>
                  </div>
                  <p className="text-black font-light text-sm text-start">
                    I plan to enhance departmental visibility through
                    competitions, secure sponsorships for projects and improve
                    communication between students and faculty
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full mt-4">
                <button className="w-full p-3 bg-[#489B3F] rounded-md text-white font-bold hover:bg-[#3e8836] transition">
                  Submit Vote
                </button>
              </div>
            </div>
          )}
          {activeTab === "campaigns" && (
            <div className="w-full bg-white px-4 py-6">
              <p className="text-black font-bold text-lg">Campaigns</p>
              <p className="text-black text-sm sm:text-base">
                Explore the ongoing campaigns and manifestos of the candidates.
                Learn about their plans and initiatives for the department.
              </p>
            </div>
          )}
          {activeTab === "results" && (
            <div className="w-full bg-white px-4 py-6">
              <p className="text-black font-bold text-lg">Results</p>
              <p className="text-black text-sm sm:text-base">
                View the election results and see how your vote contributed to
                the outcome. Stay informed about the elected representatives and
                their plans for the department.
              </p>
            </div>
          )}
        </div>
      </div>
     
    </div>
  );
}

export default VotingPage;
