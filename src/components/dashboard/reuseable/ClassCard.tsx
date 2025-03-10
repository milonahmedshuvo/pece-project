

interface CardProps {
  title: string;
  sub: string;
}




// :React.FC<CardProps>
const ClassCard = ({ title, sub }: CardProps) => {
  return (
    <div className="w-full xl:w-[200px] rounded shadow-xs md:shadow px-5 pt-3 border border-gray-100">
      <p className="font-bold text-[15px] text-[#0B2545]">{title}</p>

      <p className=" text-[30px] md:text-[37px] text-[#0B2545] font-semibold">
        {sub}
      </p>
    </div>
  );
};

export default ClassCard;
