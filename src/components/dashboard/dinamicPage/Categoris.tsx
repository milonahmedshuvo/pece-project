import { FiArrowRightCircle } from "react-icons/fi";
import ClassCard from "../reuseable/ClassCard";

const Categoris = () => {
  return (
    <div className="mt-[-12px]">
      <h2 className="text-2xl font-normal text-[#134074] mb-3.5 ">Class</h2>

      <div className="flex flex-col  lg:flex-col xl:flex-row justify-between gap-4 xl:gap-10  ">
        <div className="w-full  md:w-full xl:w-3/5">
          <div className="w-full bg-[#134074] rounded pl-3 py-1  shadow mb-3.5">
            <span className="text-[17px] font-medium text-white  ">
              Primary class
            </span>
          </div>

          {/* flex flex-col lg:flex-row gap-3 lg:gap-4 */}
          <div className="grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-[200px_200px_200px_200px] gap-2 ">
            <ClassCard sub="Year 1" title="Class"></ClassCard>
            <ClassCard sub="Year 2" title="Class"></ClassCard>
            <ClassCard sub="Year 3" title="Class"></ClassCard>
            <ClassCard sub="Year 4" title="Class"></ClassCard>
            <ClassCard sub="Year 5" title="Class"></ClassCard>
            <ClassCard sub="Year 5" title="Class"></ClassCard>
            <ClassCard sub="Year 5" title="Class"></ClassCard>
          </div>

          <div className="w-full bg-[#134074] rounded pl-3 py-1  shadow mb-3.5 mt-10">
            <span className="text-[17px] font-medium text-white  ">
              Primary class
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-[200px_200px_200px_200px] gap-2 ">
            <ClassCard sub="Year 1" title="Class"></ClassCard>
            <ClassCard sub="Year 2" title="Class"></ClassCard>
            <ClassCard sub="Year 3" title="Class"></ClassCard>
            <ClassCard sub="Year 4" title="Class"></ClassCard>
            <ClassCard sub="Year 5" title="Class"></ClassCard>
            <ClassCard sub="Year 5" title="Class"></ClassCard>
            <ClassCard sub="Year 5" title="Class"></ClassCard>
          </div>
        </div>

        {/* news card  */}
        <div className="border border-gray-300 rounded-xl w-full  md:w-full xl:w-[370px] p-3 space-y-2 pb-16 ">
          <div className="flex justify-between items-center mb-3">
            <p className="font-bold text-[15px] text-[#134074]">News</p>
            <FiArrowRightCircle className="text-[#0B2545] "></FiArrowRightCircle>
          </div>

          <div className="border border-gray-300 p-2 rounded-xl">
            <h3 className="text-[#000000] font-semibold text-[16px]">
              News title
            </h3>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex
              urna, lobortis a nisi a, facilisis tincidunt magna.
            </p>
          </div>

          <div className="border border-gray-300 p-2 rounded-xl">
            <h3 className="text-[#000000] font-semibold text-[16px]">
              News title
            </h3>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex
              urna, lobortis a nisi a, facilisis tincidunt magna.
            </p>
          </div>

          <div className="border border-gray-300 p-2 rounded-xl">
            <h3 className="text-[#000000] font-semibold text-[16px]">
              News title
            </h3>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex
              urna, lobortis a nisi a, facilisis tincidunt magna.
            </p>
          </div>

          <div className="border border-gray-300 p-2 rounded-xl">
            <h3 className="text-[#000000] font-semibold text-[16px]">
              News title
            </h3>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex
              urna, lobortis a nisi a, facilisis tincidunt magna.
            </p>
          </div>

          <div className="border border-gray-300 p-2 rounded-xl">
            <h3 className="text-[#000000] font-semibold text-[16px]">
              News title
            </h3>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex
              urna, lobortis a nisi a, facilisis tincidunt magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoris;
