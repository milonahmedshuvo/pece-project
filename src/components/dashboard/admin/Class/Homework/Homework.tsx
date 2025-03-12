import { FiArrowRightCircle } from "react-icons/fi";
import { GrScorecard } from "react-icons/gr";
import HomeworkCard from "./HomeworkCard";
import HomeworkTableComponent from "./HomeworkTable";
import { Input } from "antd";
import { GoSearch } from "react-icons/go";

const Homework = () => {
  return (
    <div className="mt-[-12px] ">
      <h2 className="text-2xl font-normal text-[#134074] mb-3.5 ">TimeTable</h2>

      <div className="flex flex-col  lg:flex-col xl:flex-row justify-between gap-4 xl:gap-10">
        <div className="w-full  md:w-full xl:w-3/5">
          <div className="grid  grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            <div className="w-full bg-[#134074] rounded pl-3 py-1  shadow mb-3.5 col-span-2 md:col-span-2 lg:col-span-2  xl:col-span-3">
              <span className="text-[17px] font-medium text-white  ">
                PJanuary - June 2025
              </span>
            </div>

            <div className=" bg-[#134074] rounded pl-3 py-1  shadow mb-3.5 w-full col-span-2 lg:col-span-1">
              <span className="text-[17px] font-medium text-white  ">
                Export Timetable
              </span>
            </div>
          </div>

          {/* flex flex-col lg:flex-row gap-3 lg:gap-4 */}
          <div className="grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-2 ">
            <HomeworkCard
              subject="English"
              timing="8:00 AM - 9:00 AM"
            ></HomeworkCard>
            <HomeworkCard
              subject="Mathematics"
              timing="8:00 AM - 9:00 AM"
            ></HomeworkCard>
            <HomeworkCard
              subject="Science"
              timing="8:00 AM - 9:00 AM"
            ></HomeworkCard>
            <HomeworkCard
              subject="History"
              timing="8:00 AM - 9:00 AM"
            ></HomeworkCard>
            <HomeworkCard
              subject="ICT"
              timing="8:00 AM - 9:00 AM"
            ></HomeworkCard>
            <HomeworkCard
              subject="Economics"
              timing="8:00 AM - 9:00 AM"
            ></HomeworkCard>
          </div>

          <div className="flex justify-between mt-16 mb-1.5 gap-60">

            <p className="text-[#134074] text-[20px] font-semibold w-1/2">
              Individual Homework
            </p>


            <Input
              size="large"
              placeholder="Search for student"
              prefix={<GoSearch />}
              className="border border-gray-300  focus:ring-0 !shadow-none focus:!shadow-none py-10"
            />
          </div>

          <div>
            <HomeworkTableComponent />
          </div>
        </div>

        {/* news card  */}
        <div className="border border-gray-300 rounded-xl w-full  md:w-full xl:w-[370px] p-3 space-y-2 flex flex-col justify-between gap-20 ">
          <div>
            <div className="flex justify-between items-center mb-3">
              <p className="font-bold text-[15px] text-[#134074]">News</p>
              <FiArrowRightCircle className="text-[#0B2545] "></FiArrowRightCircle>
            </div>

            {/* manu list container  */}
            <div className="w-full lg:w-[68%]">
              <div>
                <p className="font-medium text-[18px] text-[#134074]">
                  Details
                </p>

                <div className="flex justify-between">
                  <div className="flex flex-col my-1 space-y-1.5">
                    <span className="font-[400] text-[15px] text-[#000000] text-start">
                      Total Subjects
                    </span>
                    <span className="font-[400] text-[15px] text-[#000000] text-start">
                      Total Subjects
                    </span>
                    <span className="font-[400] text-[15px] text-[#000000] text-start">
                      Average Attendance
                    </span>
                  </div>

                  <div className="flex flex-col my-1 space-y-1.5">
                    <span className="font-[600] text-[15px] text-[#000000] ">
                      9
                    </span>
                    <span className="font-[600] text-[15px] text-[#000000] ">
                      4
                    </span>
                    <span className="font-[600] text-[15px] text-[#000000] ">
                      90%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* button container  */}
          <div className=" space-y-2">
            <p className="text-[#134074] font-medium text-[14px] ml-1.5">
              Effortlessly import data, including tasks and timetables, via
              Excel or PDF file for seamless organization.
            </p>
            <button className="bg-[#134074] text-[#FFFFFF] py-3 px-1 text-center w-full drop-shadow-sm rounded-xl font-normal text-[14px] border border-gray-100 flex justify-center items-center gap-2">
              {" "}
              <GrScorecard /> <span>Add Homework</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework;
