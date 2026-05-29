import { Destination } from "../../../data/Destination";
import Card from "../../../components/Card";
const PopularDestination = () => {
  return (
    <section className="p-4 xl:p-[128px] mt-24 ">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl xl:text-6xl font-normal">
          Discover the Best Travel Packages <br /> of the Month
        </h1>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          quaerat porro quia.
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-9 mt-12">
        {Destination.filter((item) => item.rating >= 4.9).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularDestination;
