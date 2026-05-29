import { useState } from "react";
import SocialProofCard from "../components/SocialProofCard";
import BottomCarousel from "../components/HeadlineCarousel";
import { HeadlineCarouselData } from "../../../data/HeadlineCarousel";

const HeadlineHomepage = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const bgIndex =
    (currentIdx - 1 + HeadlineCarouselData.length) %
    HeadlineCarouselData.length;

  const activeDestination = HeadlineCarouselData[bgIndex];

  return (
    <section className="relative overflow-hidden p-4 2xl:p-[72px] min-h-screen">
      {/* Background Image */}
      <img
        src={activeDestination.image}
        alt={activeDestination.title}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center mt-24">
          <div className="px-4 py-1 w-fit rounded-4xl border-white/40 border-y bg-white/10 backdrop-blur-xs text-white overflow-hidden">
            <h3>Lorem ipsum dolor sit.</h3>
          </div>

          <h1 className="text-4xl xl:text-6xl mt-7 text-white font-extralight leading-tight">
            Explore {activeDestination.title} <br />
            <span className="font-normal">Unforgettable Experience</span>
          </h1>
        </div>

        <div className="mt-12 xl:mt-24 flex flex-col-reverse xl:flex-row items-end justify-between gap-12 xl:gap-44">
          <SocialProofCard />

          <BottomCarousel
            selectedIndex={currentIdx}
            onCarouselSelect={setCurrentIdx}
          />
        </div>
      </div>
    </section>
  );
};

export default HeadlineHomepage;
