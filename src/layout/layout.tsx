import { useState, useEffect } from "react";
import { FiHome, FiMenu, FiBookOpen } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";

// import { TbBrandFeedly } from "react-icons/tb";
// import { SlCalender } from "react-icons/sl";
// import { LuNewspaper } from "react-icons/lu";
// import { IoMdNotifications } from "react-icons/io";

import { Link, Outlet, useParams } from "react-router";
import Navbar from "./Navbar/Navbar";

export default function Dashboard() {
  const { name } = useParams();
  console.log({ name });
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);

  const categories = [
    {
      name: "Class",
      icon: <FiBookOpen className="w-[24px] h-[24px] text-[#11345D]" />,
      children: ["Attendance", "Timetable", "Homework"],
    },
    {
      name: "Teachers",
      icon: <GiTeacher className="w-[24px] h-[24px] text-[#11345D]" />,
      children: ["Primary", "Secondary", "College"],
    },
    {
      name: "Students",
      icon: <PiStudent className="w-[24px] h-[24px] text-[#11345D]" />,
      children: ["Grade 1", "Grade 2"],
    },
  ];

  // Handle window resize to check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Navbar />

      <div className="flex h-screen">
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
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link to={`/category/${category.name}`}>
                    <button
                      className="flex items-center gap-2 p-2 font-semibold rounded w-full text-left"
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category.name
                            ? null
                            : category.name
                        )
                      }
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  </Link>

                  {/* Child categories */}
                  {/* Child categories */}
                  {selectedCategory === category.name && (
                    <ul className="ml-6 mt-2 relative border-l-3 border-[#11345D] transition-all duration-300 ease-in-out ">
                      {category.children.map((child, index) => (

                        <Link to={`/admin/${child}`} > 
                        <li
                          key={index}
                          className={`pl-6 py-2 flex items-center gap-2 mt-3 cursor-pointer relative  ${
                            activeChild === child
                              ? "text-[#11345D] font-bold shadow ml-3 rounded-md pl-3"
                              : "text-[#11345D] font-semibold"
                          }`}
                          onClick={() => setActiveChild(child)}
                        >
                          {/* Dot for progress bar */}
                          <span
                            className={` ${
                              activeChild === child
                                ? "bg-[#11345D] w-1 h-4 left-4 rounded-2xl "
                                : "bg-[#163760] w-3 h-3 rounded-full absolute -left-2"
                            }`}
                          ></span>

                          {child}
                        </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
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

            {/* { !name && (
              <>
                <h2 className="text-[#134074] font-medium text-[24px] lg:text-[30px] pl-2 ">
                  Dashboard
                </h2>

                <div className="flex flex-col">
                  <span className="text-[#134074] font-bold text-[24px] lg:text-[30px] text-end leading-5">
                    9:41 AM
                  </span>
                  <span className="text-[#134074] font-bold text-[18px] lg:text-[22px] text-end">
                    Thu, 01/01/2024
                  </span>
                </div>
              </>
            )} */}




          </div>




          {/* Content Area */}
          <div className="px-3 lg:px-6 flex">
            {/* Vertical Progress Bar */}

            {/* Main content area */}
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
