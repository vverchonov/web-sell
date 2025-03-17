import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import ServiceContactUs from "./components/ServiceContactUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <AboutUs />
      <Services />
      <ServiceContactUs/>
      <Testimonials />
    </main>
  );
}
