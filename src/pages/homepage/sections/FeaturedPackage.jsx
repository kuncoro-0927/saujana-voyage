import { useState } from "react";
import { HeadlineCarouselData } from "../../../data/HeadlineCarousel";

const FeaturedPackage = () => {
  const [activeId, setActiveId] = useState(1); // default aktif id 1

  return (
    <section className="xl:px-[128px] px-4 mt-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl xl:text-6xl font-normal">
          Discover the Best Travel Packages <br /> of the Month
        </h1>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          quaerat porro quia.
        </span>
      </div>

      <div className="flex flex-col xl:flex-row bg-amber-50items-center gap-5 mt-12">
        {HeadlineCarouselData.filter((item) => [1, 3, 5].includes(item.id)).map(
          (item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveId(item.id)}
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 
    ${
      activeId === item.id
        ? "h-[380px] md:h-full xl:w-1/2"
        : "h-[180px] md:h-full xl:w-1/3"
    }`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Teks — hanya muncul kalau aktif */}
              <div
                className={`absolute bottom-6 left-6 right-6 text-white p-5 rounded-xl border-white/40 border-y bg-white/10 backdrop-blur-xs text-white overflow-hidden transition-all duration-300 ${
                  activeId === item.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <div className="flex justify-between items-end gap-4">
                  <div>
                    <h3 className="text-base font-medium">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 w-fit px-3 py-1 mb-2 text-sm rounded-full border-white/40 border-y bg-white/10 backdrop-blur-xs text-white">
                    <TagIcon />
                    <span>Best Deals</span>
                  </div>
                </div>
                <p className="text-sm mt-1">{item.description}</p>

                <div className="flex items-center  mt-2 text-sm text-white">
                  <span className="flex items-center gap-2">
                    <LocationIcon /> {item.province}
                  </span>

                  <span className="mx-3 w-px h-4 bg-gray-300" />

                  <span className="flex items-center gap-2">
                    <RatingIcon /> {item.rating} rating
                  </span>

                  {/* <span className="mx-3 w-px h-4 bg-gray-300" /> */}

                  {/* <span className="flex items-center gap-2">
                    <DurationIcon /> {item.duration}
                  </span> */}
                </div>
                <span className="flex items-center mt-2 gap-2 text-sm">
                  <DurationIcon /> {item.duration}
                </span>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mt-4 lg:mt-2">
                  <span className="font-normal text-lg">
                    IDR {item.pricePackage}/
                    <span className="font-extralight text-sm">person</span>
                  </span>

                  <div className="flex items-center mt-2 lg:mt-4">
                    <div className="flex items-center gap-x-3 rounded-full text-sm border-y border-white/40 bg-white/10 px-4 py-1 backdrop-blur-xs">
                      <span className="text-white">Book Now</span>
                    </div>
                    <span className="flex items-center justify-center rounded-full bg-white p-2 text-black">
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
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

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    class="bi bi-geo-alt"
    viewBox="0 0 16 16"
  >
    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </svg>
);

const TagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
    class="bi bi-tag"
    viewBox="0 0 16 16"
  >
    <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" />
    <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z" />
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
export default FeaturedPackage;
