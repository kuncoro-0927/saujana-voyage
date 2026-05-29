import CardTestimonial from "../components/CardTestimonial";
import { Testimonial } from "../../../data/Testimonial";
const Testimonials = () => {
  return (
    <section className="xl:p-[128px] ">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-5xl font-normal">
          Moments that made every journey <br /> unforgattable
        </h1>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          quaerat porro quia.
        </span>
      </div>
      <div className="flex items-end justify-center mt-12 -space-x-9">
        {Testimonial.map((item, index) => (
          <CardTestimonial key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
