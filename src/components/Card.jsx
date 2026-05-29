const Card = ({ item }) => {
  return (
    <div className="h-full relative overflow-hidden flex flex-col rounded-2xl">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full aspect-[4/3] rounded-2xl object-cover"
      />

      {item.badge && (
        <span className="absolute text-sm top-2 right-2 text-white rounded-full border-y border-white/40 bg-white/10 px-4 py-1 backdrop-blur-xs">
          {item.badge}
        </span>
      )}
      {/* CONTENT */}
      <div className="py-4 flex flex-col gap-y-2 flex-1">
        <span className=" text-xs font-medium">{item.province}</span>
        <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
        <span className=" text-xs font-normal -mt-1 text-[#363636]">{item.description}</span>
        <span className="flex font-normal text-xs text-[#363636] items-start gap-2">
          <RatingIcon /> {item.rating} rating
        </span>

        <span className="text-xs font-normal flex text-[#363636] items-start gap-2">
          <DurationIcon /> {item.duration}
        </span>
        <div className="mt-auto pt-4 flex items-end justify-between gap-2">
          <span className="font-semibold text-base  w-fit">
            IDR {item.price}/ <span className="text-sm font-light">person</span>
          </span>

          <div className="text-sm flex items-center gap-x-1 w-fit shrink-0 rounded-full border bg-transparent pl-4 pr-1 py-1">
            <span>Book Now</span>

            <span className="flex items-center justify-center rounded-full bg-transparent border p-2 text-black">
              <ArrowUpRightIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const DurationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    class="bi bi-clock"
    viewBox="0 0 16 16"
  >
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    class="bi bi-arrow-up-right"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
    />
  </svg>
);

const RatingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    class="bi bi-star"
    viewBox="0 0 16 16"
  >
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
  </svg>
);
export default Card;
