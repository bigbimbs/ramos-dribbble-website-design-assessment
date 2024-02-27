import { HeroSection, HomePageLayout, SectionTwo } from "./components";
import { SectionFive } from "./components/SectionFive";
import { SectionFour } from "./components/SectionFour";
import { SectionSix } from "./components/SectionSix";
import { SectionThree } from "./components/SectionThree";

export const HomePage = () => {
  return (
    <HomePageLayout>
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </HomePageLayout>
  );
};
