import CardTestimonial from "../components/CardTestimonial";
import { Testimonial } from "../../../data/Testimonial";
const Testimonials = () => {
  return (
    <section className="xl:p-[128px] p-4 mt-24 overflow-hidden">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl xl:text-6xl font-normal">
          Moments that made every journey unforgattable
        </h1>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          quaerat porro quia.
        </span>
      </div>
      <div className="grid grid-cols-2 xl:flex items-center xl:items-end justify-center mt-12 -space-y-9 xl:-space-x-9">
        {Testimonial.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === 4 ? "col-span-2 justify-self-center" : ""
            } xl:contents`}
          >
            <CardTestimonial item={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
