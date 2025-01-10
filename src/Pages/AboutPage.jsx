import Aboutus from "../Components/Aboutus";
import Blog from "../Components/Blog";
import OurWork from "../Components/OurWork";
import PageBanner from "../Components/PageBanner";
import Testimonials from "../Components/Testimonials";
import TopBrands from "../Components/TopBrands";
import { aboutbanneriamge } from "../constant";

const AboutPage = () => {
  return (
    <div>
      <PageBanner image={aboutbanneriamge} title="About Us" style="bg-center" />
      <Aboutus />
      <OurWork />
      {/* <Testimonials /> */}
      <Blog />
      {/* <TopBrands /> */}
    </div>
  );
};

export default AboutPage;
