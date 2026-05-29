import HeadlineHomepage from "./sections/HeadlineHomepage";
import FeaturedPackage from "./sections/FeaturedPackage";
import PopularDestination from "./sections/PopularDestination";
import Testimonials from "./sections/Testimonials";
import Stats from "./sections/Stats";
const Homepage = () => {
  return (
    <>
      <HeadlineHomepage />
      <FeaturedPackage />
      <Stats/>
      <PopularDestination />
      <Testimonials/>
    </>
  );
};

export default Homepage;
