import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HeadlineCarouselData } from "../../../data/HeadlineCarousel";

const BottomCarousel = ({ selectedIndex, onCarouselSelect }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: isMobile ? "center" : "start",
    dragFree: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      // Kirim index terbaru ke komponen induk saat carousel di-slide manual
      onCarouselSelect(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    // Jalankan sekali di awal
    onSelect();
  }, [emblaApi, onCarouselSelect]);

  // Modifikasi fungsi klik
  const handleClick = (index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
    onCarouselSelect(index);
  };

  return (
    <div
      key={isMobile ? "mobile" : "desktop"}
      className="overflow-hidden "
      ref={emblaRef}
    >
      <div className="flex max-w-sm  items-end lg:-ml-4 ">
        {HeadlineCarouselData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleClick(index)}
            className="pl-3 lg:pl-4 shrink-0 w-[220px] sm:w-[250px] xl:w-[320px]"
          >
            <div className=" overflow-hidden">
              <img
                src={item.image}
                loading="lazy"
                decoding="async"
                alt={item.title}
                className="w-full h-[160px] sm:h-[170px] xl:h-[260px] object-cover rounded-2xl"
              />

              {selectedIndex === index && (
                <div className="h-[120px] text-start text-white py-5">
                  <h3
                    className={`text-base font-medium transition-opacity duration-200 ${
                      selectedIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm transition-opacity duration-200 ${
                      selectedIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomCarousel;
