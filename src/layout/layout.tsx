import { useState, useEffect } from "react";
import { FiHome, FiMenu, FiBookOpen } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { TbBrandFeedly } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { LuNewspaper } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Handle window resize to check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (

    <div> 
       <Navbar></Navbar>

    <div className="flex h-screen ">
      {/* Sidebar */}
      <div
        className={`bg-[#FFFFFF] text-[#11345D] w-72 py-5 pl-8 space-y-6 fixed h-full transition-transform duration-300 z-10 ${
          isOpen || isLargeScreen ? "translate-x-0" : "-translate-x-72"
        } md:relative`}
      >
        <div className="flex gap-2 p-2">
          <FiHome className="w-[24px] h-[24px] text-[#11345D]" />
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>

        <nav>
          <ul className="space-y-4 ">
            <li className="flex items-center gap-2 p-2 font-semibold rounded">
              <FiBookOpen className="w-[24px] h-[24px] text-[#11345D]" /> Class
            </li>
            <li className="flex items-center gap-2 p-2 font-semibold rounded">
              <GiTeacher className="w-[24px] h-[24px] text-[#11345D]" /> Teachers
            </li>
            <li className="flex items-center gap-2 p-2 font-semibold rounded">
              <PiStudent className="w-[24px] h-[24px] text-[#11345D]" />
              Students
            </li>
            <li className="flex items-center gap-2 p-2 font-semibold rounded">
              <TbBrandFeedly className="w-[24px] h-[24px] text-[#11345D]" />
              Fees
            </li>
            <li className="flex items-center gap-2 p-2 font-semibold rounded">
              <SlCalender className="w-[24px] h-[24px] text-[#11345D]" />
              Calendar
            </li>
            <li className="flex items-center gap-2 p-2 font-semibold rounded">
              <LuNewspaper className="w-[24px] h-[24px] text-[#11345D]" />
              News
            </li>
            <li className="flex items-center gap-2 p-2 font-semibold rounded">
              <IoMdNotifications className="w-[24px] h-[24px] text-[#11345D]" />
              Notification
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col transition-all">

        {/* Navbar */}
        <div className="p-4 flex items-center justify-between">
          {!isLargeScreen && (
            <button onClick={() => setIsOpen(!isOpen)}>
              <FiMenu className="text-2xl" />
            </button>
          )}

          <h2 className="text-[#134074] font-medium text-[24px] lg:text-[30px] pl-2 ">Dashboard</h2>

          <div className="flex flex-col ">
            <span className="text-[#134074] font-bold text-[24px] lg:text-[30px] text-end leading-5">
              9:41 AM
            </span>
            <span className="text-[#134074] font-bold text-[18px] lg:text-[22px] text-end">
              Thu, 01/01/2024
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-3 lg:px-6">
          {/* <p>Welcome to your dashboard! This is the main content area.</p> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
    </div>
  );
}
