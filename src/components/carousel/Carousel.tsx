"use client";

import { useRef, useState, useEffect } from "react";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

interface Project {
  id: number;
  month: string;
  title: string;
  weekday : string
}



const projects: Project[] = [
  {
    id: 1,
    month: "01 Jan",
    title: "AliExpress Tool Storage Deals",
    weekday: 'Thursday'
  },
  {
    id: 2,
    month: "01 Jan",
    title: "MLILY Fusion Supreme ",
    weekday: 'Thursday'
  },
  {
    id: 3,
    month: "01 Jan",
    title: "AliExpress Tool Storage Deals",
    weekday: 'Thursday'
  },
  {
    id: 4,
   
    month: "01 Jan",
    title: "AliExpress Tool Storage Deals",
    weekday: 'Thursday'
  },
  {
    id: 5,
    month: "01 Jan",
    title: "AliExpress Tool Storage Deals",
    weekday: 'Thursday'
  },
  {
    id: 6,
    month: "01 Jan",
    title: "AliExpress Tool Storage Deals",
    weekday: 'Thursday'
  },
  {
    id: 7,
    month: "01 Jan",
    title: "AliExpress Tool Storage Deals",
    weekday: 'Thursday'
  },
  {
    id: 8,
    
    month: "01 Jan",
    title: "AliExpress Tool Storage Deals",
    weekday: 'Thursday'
  },
  {
    id: 9,
    month: "01 Jan",
    title: "AliExpress Tool Storage Deals",
     weekday: 'Thursday'
  },
  {
    id: 10,
    month: "U01 Jan",
    title: "AliExpress Tool Storage Deals",
    weekday: 'Thursday'
  },
];





export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };


  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 1;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative p-6 w-[100px] xl:w-[750px] bg-[#EBEBEB] py-16 rounded mt-5 hidden lg:w-[750px] lg:block xl:block">

      {canScrollLeft ? (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-[25px] -translate-y-1/2 p-1 cursor-pointer  z-40 p-6"
        >
          <FiArrowLeftCircle className="text-xl text-gray-500"> </FiArrowLeftCircle>
        </button>
      ) : <p className="absolute left-0 top-[25px] -translate-y-1/2 p-1 cursor-pointer font-semibold text-[#0B2545] text-[15px] z-40 pl-6">Upcoming Activities</p> }


      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-2 scrollbar-hide hide-scrollbar cursor-pointer"
        onScroll={updateScrollButtons}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[160px] h-[150px]  relative bg-white shadow-md rounded-lg  border border-gray-200 flex flex-col justify-between p-5"
          >
                                
               <p className="text-[20px] text-[#0B2545] font-medium ">{project.month}</p>
               <p className="text-[#134074] font-semibold text-[13px] leading-4" >{project.title}</p>
               <p className="text-[#0B2545] font-medium text-[13px] ">{project.weekday}</p>

           
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-[10px] top-[25px] -translate-y-1/2  cursor-pointer  z-10 p-6"
        >
          <FiArrowRightCircle className="text-xl text-gray-500"></FiArrowRightCircle>
        </button>
      )}
      <style >{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
