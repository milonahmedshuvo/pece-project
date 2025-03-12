interface CardProps {
    subject: string;
    timing: string;
  }
  


  // :React.FC<CardProps>
  const HomeworkCard = ({ subject, timing }: CardProps) => {
  
  

      // xl:w-[230px]
    return (
      <div className="w-full  rounded shadow-xs md:shadow px-5 pt-3 pb-3 border border-gray-100">
        <p className="font-bold  text-[24px] text-[#134074] mb-8">{subject}</p>
  
        <div>
          <p className=" text-[14px] md:text-[16px] text-[#134074] font-medium">
            {timing}
          </p>
        </div>
      </div>
    );
  };
  
  export default HomeworkCard;
  