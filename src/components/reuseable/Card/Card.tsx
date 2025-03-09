import { FiArrowRightCircle } from "react-icons/fi";

interface CardProps {
    title : string;
    value : string
}
// :React.FC<CardProps>
const Card = ({title, value}:CardProps) => {
  return (
    <div className="w-full lg:w-[240px] rounded shadow-xs md:shadow px-5 pt-3 border border-gray-100" >

         <div className="flex justify-between items-center">
            <p className="font-bold text-[15px] text-[#0B2545]">{title}</p>
             <FiArrowRightCircle className="text-[#0B2545] "></FiArrowRightCircle>
         </div>

         <p className=" text-[40px] md:text-[50px] text-[#0B2545] font-semibold" >{value}</p>
    </div>
  )
}

export default Card