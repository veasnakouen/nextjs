import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import Post from "./components/Post";
import ProductFeature from "./components/ProductFeature";
import ProductQuickview from "./components/ProductQuickview";
import Pricing from "./components/Pricing";
import HeroSection1 from "./components/HeroSection1";
import State from "./components/State";
import Testimonial from "./components/Testimonial";
import LogosCloude from "./components/LogosCloude";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl sm:px-6 md:max-w-5xl">
      <HeroSection />
      {/* <HeroSection1 /> */}
      <AboutSection />
      <ProjectSection />
      <Post />
      <ProductFeature />
      {/* <ProductQuickview /> */}
      <Pricing />
      <State />
      <Testimonial />
      <LogosCloude />
      <Form />
    </main>
  );
}
