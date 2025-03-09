import { FiArrowRightCircle } from "react-icons/fi";
import Card from "../reuseable/Card/Card";
import ProgressBar from "../reuseable/ProgressBar/ProgressBar";
import Carousel from "../carousel/Carousel";

const Content = () => {
  return (
   
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between gap-4 ">



      <div className="w-full md:w-1/2 lg:w-full xl:w-3/5">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          <Card title="Total Students" value="235"></Card>
          <Card title="Total Classes" value="12"></Card>

          <div className="w-full lg:w-[240px] bg-[#134074] rounded-md shadow-xs md:shadow-lg px-5 pt-3 border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[15px] text-[#FFFFFF]">
                Average Attendance
              </p>
              <FiArrowRightCircle className="text-[#FFFFFF] "></FiArrowRightCircle>
            </div>

            <p className=" text-[40px]  md:text-[50px] text-[#FFFFFF] font-semibold">
              80%
            </p>
          </div>
        </div>

        {/* secound line  */}

        <div className="mt-4 flex flex-col lg:flex-row gap-3 lg:gap-4">
          <div className="w-full  lg:w-[300px] rounded shadow-xs md:shadow border border-gray-100 px-5 pt-3 py-6">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[15px] text-[#0B2545]">Fees</p>
              <FiArrowRightCircle className="text-[#0B2545] "></FiArrowRightCircle>
            </div>

            <p className="text-[22px] lg:text-[32px] text-[#0B2545] font-medium">
              RM 102,000.00
            </p>
            <ProgressBar progress={90}></ProgressBar>
          </div>

          <div className="w-full lg:w-[220px] rounded shadow-xs md:shadow px-5 pt-3 pb-3 border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[15px] text-[#0B2545]">
                Leave Application
              </p>
              <FiArrowRightCircle className="text-[#0B2545] "></FiArrowRightCircle>
            </div>
            <span className="text-[#0B2545] font-medium text-[12px] mt-3">
              Students
            </span>

            <p className="text-[40px] md:text-[50px] text-[#0B2545] font-semibold leading-10">
              10
            </p>
          </div>
        </div>


        <Carousel/>
      </div>



      {/* news card  */}

      <div className="border border-gray-300 rounded-xl w-full md:w-[400px] lg:w-full xl:w-[400px] p-3 space-y-2 pb-16 ">
        <div className="flex justify-between items-center mb-3">
          <p className="font-bold text-[15px] text-[#134074]">News</p>
          <FiArrowRightCircle className="text-[#0B2545] "></FiArrowRightCircle>
        </div>

          <div className="border border-gray-300 p-2 rounded-xl">
              <h3 className="text-[#000000] font-semibold text-[16px]">News title</h3>
              <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex urna, lobortis a nisi a, facilisis tincidunt magna.</p>
          </div>

          <div className="border border-gray-300 p-2 rounded-xl">
              <h3 className="text-[#000000] font-semibold text-[16px]">News title</h3>
              <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex urna, lobortis a nisi a, facilisis tincidunt magna.</p>
          </div>

          <div className="border border-gray-300 p-2 rounded-xl">
              <h3 className="text-[#000000] font-semibold text-[16px]">News title</h3>
              <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex urna, lobortis a nisi a, facilisis tincidunt magna.</p>
          </div>

          <div className="border border-gray-300 p-2 rounded-xl">
              <h3 className="text-[#000000] font-semibold text-[16px]">News title</h3>
              <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex urna, lobortis a nisi a, facilisis tincidunt magna.</p>
          </div>

          <div className="border border-gray-300 p-2 rounded-xl">
              <h3 className="text-[#000000] font-semibold text-[16px]">News title</h3>
              <p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex urna, lobortis a nisi a, facilisis tincidunt magna.</p>
          </div>
      </div>



    </div>
  );
};

export default Content;
