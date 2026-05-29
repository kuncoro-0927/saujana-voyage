import cardstat from "../../../assets/card_stat.svg";

const StatCard = ({ number, text }) => {
  return (
    <div className="relative w-full">
      {/* SVG Background */}
      <img
        src={cardstat}
        alt=""
        className="w-[270px] xl:w-full h-auto select-none pointer-events-none"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8">
   
          <h2 className="text-5xl xl:text-6xl font-semibold text-gray-900">
            {number}
          </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default StatCard;