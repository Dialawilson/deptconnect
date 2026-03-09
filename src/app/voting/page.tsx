import Image from "next/image";
import secure from "../../assets/img/secure.png";
import james from "../../assets/img/james.png";
import michael from "../../assets/img/michael.jpg";
import Aisha from "../../assets/img/Aisha.jpg";
import logo from "../../assets/img/logo.png";
import { Cast, Users, BarChart, Instagram, Linkedin, Twitter } from "@deemlol/next-icons";

function VotingPage() {
  return (
    <div className="w-full max-w-7xl text-left flex flex-col items-center justify-center text-center mx-auto px-4 sm:px-6 md:px-10 py-4">

      {/* HERO */}
      <div className="relative w-full py-6">
        <Image
          src={secure}
          alt="Hero Image"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-md blur-[2px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4">
            Voting & Elections
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg mb-6">
            Cast your vote for the next departmental <br className="hidden sm:block" /> leaders
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className="w-full bg-white py-6">
        <div className="flex justify-between bg-[#489B3F73] p-3 sm:p-4 rounded-md text-sm sm:text-base">

          <div className="flex gap-2 items-center bg-white px-3 py-2 rounded-md">
            <Cast size={24} className='text-black' />
            <p className="text-black text-center">Cast Vote</p>
          </div>

          <div className="flex gap-2 items-center px-3 py-2">
            <Users size={24} className='text-black'/>
            <p className="text-black">Campaigns</p>
          </div>

          <div className="flex gap-2 items-center px-3 py-2">
            <BarChart size={24} className='text-black'/>
            <p className="text-black">Results</p>
          </div>

        </div>
      </div>

      {/* ELECTION */}
      <div className="w-full bg-white px-4 py-6">
        <div className="w-full mx-auto border border-black rounded-md">

          <div className="flex flex-col justify-start items-start p-2 md:p-6  gap-6">

            <p className="text-black font-bold">
              Departmental president election
            </p>

            <p className="text-black text-sm sm:text-base">
              Select one candidate to vote for. Your vote is anonymous and final
            </p>

            {/* Candidate 1 */}
            <div className="flex flex-row md:flex-col lg:flex-row items-center gap-2 md:gap-4 p-1 md:p-4 w-full border border-black rounded-md">
              <Image
                src={james}
                alt="Sarah James"
                className="rounded-full md:rounded-md lg:rounded-full md:w-full md:h-[200px] w-20 h-20 lg:w-24 lg:h-24 object-cover"
              />
              <div className='flex flex-row md:flex-row lg:flex-col gap-4 p-4 items-center md:items-start w-full'>
                <div className="text-left">
                  <p className="text-black font-bold">
                    Sarah James <br />
                    <span className="font-light text-sm">400 level</span>
                  </p>
                </div>
                <p className="text-black font-light text-sm text-start">
                  I will advocate for better laboratory equipment, organize regular tech workshops, and establish mentorship programs connecting students with industry professionals
                </p>
              </div>
            </div>

            {/* Candidate 2 */}
            <div className="flex flex-row md:flex-col lg:flex-row items-center gap-4 p-4 w-full border border-black rounded-md">
              <Image
                src={michael}
                alt="Micheal Agunwa"
                className="rounded-full md:rounded-md lg:rounded-full md:w-full md:h-[200px] w-20 h-20 lg:w-24 lg:h-24 object-cover"
              />
              <div className='flex flex-row md:flex-row lg:flex-col gap-2 md:gap-4 p-1 md:p-4 items-center md:items-start w-full'>
                <div className="text-left">
                  <p className="text-black font-bold">
                    Micheal Agunwa <br />
                    <span className="font-light text-sm">400 level</span>
                  </p>
                </div>
                <p className="text-black font-light text-sm text-start">
                  My focus is on improving students welfare, creating more internship opportunities and fostering a collaborative learning environment through study groups and peer support
                </p>
              </div>
            </div>

            {/* Candidate 3 */}
            <div className="flex flex-row md:flex-col lg:flex-col lg:flex-row items-center gap-4 p-4 w-full border border-black rounded-md">
              <Image
                src={Aisha}
                alt="Aisha Barakat"
                className="rounded-full md:rounded-md lg:rounded-full md:w-full md:h-[200px] w-20 h-20 lg:w-24 lg:h-24 object-cover"
              />
              <div className='flex flex-row md:flex-row lg:flex-col gap-2 md:gap-4 p-1 md:p-4 items-center md:items-start w-full'>
                <div className="text-left">
                  <p className="text-black font-bold">
                    Aisha Barakat <br />
                    <span className="font-light text-sm">400 level</span>
                  </p>
                </div>
                <p className="text-black font-light text-sm text-start">
                  I plan to enhance departmental visibility through competitions, secure sponsorships for projects and improve communication between students and faculty
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
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-white w-full">
       <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between p-10 gap-4">
         <div className="flex flex-col justify-between h-[100px]">
           <Image src={logo} alt="logo" className="max-w-[100px] max-h-[100px] object-contain" />
          <p className="text-[#0D0D0D] -mt-8 text-start">Your Departmental Hub for Voting, Shoping and Transparency</p>
          </div>
           <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 w-full">
         <div className="flex flex-col items-start lg:items-center p-2 gap-2">
            <p className="text-[#489B3F]">Company</p>
            <p className="text-[#070707]">About us</p>
            <p className="text-[#070707]">Features</p>
            <p className="text-[#070707]">Activities</p>
          </div>

          <div className="flex flex-col items-start lg:items-center p-2 gap-2">
            <p className="text-[#489B3F]">Legal</p>
            <p className="text-[#070707]">Safety Tips</p>
            <p className="text-[#070707]">Terms of use</p>
            <p className="text-[#070707]">Privacy Policy</p>
          </div>

           <div className="flex flex-col items-start w-full md:w-full lg:max-w-full lg:items-center p-2 gap-2">
            <p className="text-[#489B3F]">Newsletter</p>
            <p className="text-[#070707] text-left">Stay updated with the latest DeptConnect activities and events.</p>
            <form className="text-gray-400 flex flex-col w-full gap-2">
              <input
                type="text"
                placeholder="Add Email"
                className="bg-gray-200 p-2 rounded-md text-gray-900 focus:outline-none"
              />
              <button className="bg-[#489B3F] rounded-md p-2 text-white hover:bg-[#3e8836] transition">
                Subscribe
              </button>
            </form>
          </div>
         </div>
      </div>
        
         
          

          

        

        <div className="pt-10 pb-10">
          <div className="border border-[#070707]" />
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row mx-auto px-10 justify-between gap-10 items-center pt-5 pb-5 w-full">
          <p className="text-[#070707]">Deptconnect © 2026</p>
          <div className="flex items-center gap-4">
            <p className="text-[#070707]">About</p>
            <p className="text-[#070707]">Contact</p>
            <p className="text-[#070707]">Privacy</p>
          </div>
          <div className="flex items-center gap-10">
            <Instagram size={24} className="text-[#070707]" />
            <Linkedin size={24} className="text-[#070707]" />
            <Twitter size={24} className="text-[#070707]" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default VotingPage;