interface AttendanceCardProps {
  title: string;
  value: string;
  color: string;
  bgColor: string;
}

const AttendanceCard = ({
  title,
  value,
  color,
  bgColor,
}: AttendanceCardProps) => {
  return (
    <div
      className="w-full xl:w-[150] h-[148px] rounded-lg shadow-xs md:shadow px-5 pt-6 pb-5"
      style={{ backgroundColor: bgColor }}
    >


      <p className={`font-medium text-[18px]`} style={{ color: color }}>
        {title}
      </p>

      <p
        className=" text-[30px] md:text-[48px]  font-semibold"
        style={{ color: color }}
      >
        {value}
      </p>


    </div>
  );
};

export default AttendanceCard;
