import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HeadlineCarouselData } from "../../../data/HeadlineCarousel";

const BottomCarousel = ({ selectedIndex, onCarouselSelect }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
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
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex items-end -ml-4">
        {HeadlineCarouselData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleClick(index)}
            className="pl-4 shrink-0 w-[320px] cursor-pointer"
            
          >
            <div className=" overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-[320px] h-[260px] object-cover rounded-2xl"
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
