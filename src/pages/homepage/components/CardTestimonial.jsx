const CardTestimonial = ({ item, index }) => {
  const rotations = [6, -6, 0, 9, -7];
  const zOrders = ["z-10", "z-20", "z-30", "z-20", "z-10"];
  return (
    <div
      className={`w-[200px] xl:w-[300px] relative p-2 bg-white shadow-md relative flex flex-col rounded-2xl 
  cursor-pointer transition-all duration-300 
  hover:z-50 hover:scale-105 hover:-translate-y-2
  ${zOrders[index]}`}
      style={{ transform: `rotate(${rotations[index]}deg)` }}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="h-[170px] w-full xl:h-[250px] rounded-2xl object-cover shrink-0"
      />
       
        <span className="absolute text-sm top-4 right-4 text-white rounded-full border-y border-white/40 bg-white/10 px-4 py-1 backdrop-blur-xs">
          {item.place}
        </span>
   
      <div className="flex py-3 flex-col flex-1 overflow-hidden">
        <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
        <span className="text-sm mt-1">{item.text}</span>
      </div>
    </div>
  );
};

export default CardTestimonial;
