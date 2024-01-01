import Navbar from "@/components/navbar/navbar";
import FirstSection from "./_components/first-section";
import Sliders from "./_components/slider/sliders";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <FirstSection />
      <Sliders />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
