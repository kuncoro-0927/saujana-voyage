import { socialProofAvatars } from "../../../data/SocialProof";
import lombok_diving from "../../../assets/lombok_diving.webp";
import StatCard from "../components/CardStat";
const Stats = () => {
  return (
    <section className="xl:p-[128px] p-4 mt-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <span>Travel made simple, stories made unforgattable</span>
        <h1 className="text-4xl  xl:text-6xl font-normal leading-tight">
          We make planning  effortless so you can focus  on what
          really matters
        </h1>
      </div>

      <div className="flex items-center justify-center mt-24 -space-x-3">
        {socialProofAvatars.map((item) => (
          <img
            key={item.id}
            src={item.avatar}
            alt={item.name}
            className="w-10 h-10 rounded-full border border-white object-cover"
          />
        ))}
      </div>
      <span className="text-center flex items-center justify-center mt-4">
        Founded by travelers, for travelers. because every journey 
        deserves a personal touch.
      </span>

      <div className="relative bg-red-100 flex flex-col xl:gap-5 items-center justify-center px-5 h-full rounded-2xl mt-12 overflow-hidden">
        <img
          src={lombok_diving}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="text-sm mt-12 top-12 right-4 text-white rounded-full border-y border-white/40 bg-white/10 px-4 py-2 backdrop-blur-xs">
          <span className="">
            Lorem ipsum dolor sit amet, consectetur 
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 bg-transparent p-8 rounded-2xl">
          <StatCard
            number="44K+"
            text="Happy explorers who found their dream Saujana"
          />
          <StatCard
            number="300+"
            text="Handpicked destinations curated for every "
          />
          <StatCard
            number="30%"
            text="Book your next trip today and enjoy exclusive deals"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
