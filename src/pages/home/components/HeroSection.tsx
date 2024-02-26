import { Section } from "@/components/Elements";

export const HeroSection = () => {
  return (
    <Section className="py-[100px] px-16">
      <div className="grid grid-cols-3 items-start gap-10">
        <div className="col-span-2">
          <div className="pl-32">
            <div className="flex items-start justify-end w-full">
              <div className="w-20 h-20 bg-[#F2F2F2] rounded-full flex justify-center items-center">
                <img src="/icons/hero-icon-1.png" className="h-8" />
              </div>
              <div className="w-20 h-20 bg-[#FE4A23] rounded-full -ml-4 flex justify-center items-center">
                <img src="/icons/hero-icon-2.png" className="w-8" />
              </div>
              <h2 className="text-[80px] p-0 mt-[-16px] ml-5">Analytics</h2>
            </div>
            <h2 className="text-[80px] p-0 mt-[-20px] word-spacing-thin">
              that <span className="text-[#CCCCCC]">helps</span> you
            </h2>
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-[180px] w-full bg-[#F2F3F5] rounded-xl relative">
            <div className="h-10 w-10 rounded-full bg-[#FE4A23] absolute top-[-16px] left-[-16px] flex justify-center items-center">
              <img src="/icons/hero-icon-3.png" className="h-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 mt-[-20px]">
        <h2 className="text-[80px]">Shape</h2>
        <div className="w-20 h-20 bg-[#FFD027] rounded-full"></div>
        <h2 className="text-[80px]">the</h2>
        <h2 className="text-[80px]">future</h2>
      </div>
    </Section>
  );
};
