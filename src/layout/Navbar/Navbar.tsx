import { useState } from "react";
import profile from "../../image/profile.png";

const Navbar = () => {
  const [search, setSearch] = useState("");






  return (
    <nav className=" shadow-sm pr-7 flex items-center justify-between ">
      {/* Left side: Logo & Search */}
      <div className="flex items-center space-x-4 lg:w-1/2  ">
        {/* Logo */}
        <div className="relative w-72 bg-[#134074] py-6 overflow-hidden h-full">
          <div className="text-2xl font-bold ml-7 text-white">MyLogo</div>

          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#134074] blur-2xl"></div>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="hidden md:block border border-gray-200 px-20 py-1 rounded-full w-48 md:w-64 lg:w-[546px] ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
      </div>





      {/* Right side: Profile */}
      <div className="flex items-center space-x-3">
        <span className="font-semibold text-[#163760] hidden md:block">
          Admin Name
        </span>
        <img
          src={profile} // Change this to the actual profile image path
          alt="Profile"
          className="rounded-full w-12 h-12 border border-gray-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
