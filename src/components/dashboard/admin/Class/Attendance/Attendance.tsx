import { FiArrowRightCircle } from "react-icons/fi";
import AttendanceCard from "./Card";
import TableComponent from "./Table";


const Attendance = () => {
  return (
    <div className="mt-[-12px] ">
      <h2 className="text-2xl font-normal text-[#134074] mb-3.5 md:text-3xl md:font-semibold">
        year 1
      </h2>
      
       

      <div className="flex flex-col  lg:flex-col xl:flex-row justify-between gap-4 xl:gap-10  ">
        <div className="w-full  md:w-full xl:w-3/5">
          {/* flex flex-col lg:flex-row gap-3 lg:gap-4 */}


          <div className="grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-[150px_150px_150px_150px] gap-2 ">
            <AttendanceCard
              title="Students"
              value="30"
              color="#0B2545"
              bgColor="#FFF"
            />
            <AttendanceCard
              title="Attendance"
              value="3"
              color="#FFFFFF"
              bgColor="#134074"
            />
            <AttendanceCard
              title="Absent"
              value="6"
              color="#FFFFFF"
              bgColor="#F06D00"
            />
            <AttendanceCard
              title="Attendance"
              value="1"
              color="#FFFFFF"
              bgColor="#0086A4"
            />
          </div>


          {/* table  */}
          <div className="mt-10">
            <TableComponent />
          </div>
        </div>

        {/* news card  */}
        <div className="border border-gray-300 rounded-xl w-full  md:w-full xl:w-[370px] p-3 space-y-2 pb-16 ">
          <div className="flex justify-between items-center mb-3">
            <p className="font-bold text-[15px] text-[#134074]">News</p>
            <FiArrowRightCircle className="text-[#0B2545] "></FiArrowRightCircle>
          </div>
             
          <p className="font-medium text-[18px] text-[#134074]">Details</p>

          <div className="w-full lg:w-[68%]">

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
    </div>
  );
};

export default Attendance;
