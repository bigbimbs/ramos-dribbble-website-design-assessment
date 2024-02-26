import { Button } from "@/components/Elements/Button";

export const SectionThree = () => {
  return (
    <div className="px-20 py-[100px] ">
      <h2 className="text-[100px] word-spacing-thinner">
        Maximize <span className="text-[#CCCCCC]">efficiency</span>
      </h2>
      <h2 className="text-[100px] mt-[-40px] word-spacing-thinner">
        with our intuitive
      </h2>
      <div className="mt-10 flex justify-between">
        <div className="flex">
          <div className="h-40 w-40 bg-[#F2F2F2] z-10 rounded-full"></div>
          <div className="h-40 w-40 bg-[#FFD027] ml-[-40px] z-0 rounded-full"></div>
        </div>
        <div className="h-40 w-[460px] bg-[#FFD027] rounded-[80px] overflow-hidden flex items-center">
          <h4 className="text-nowrap text-[120px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
        </div>
      </div>
      <div className="w-full h-[2px] bg-[#F2F2F2] my-20"></div>
      <div className="flex justify-between items-center">
        <p className="max-w-[650px]">
          Explore traffic sources, page behavior, conversions and more to gain
          deep insight into your audience. With us, your business doesn't just
          adopt - it evolves
        </p>
        <div className="flex justify-end gap-2">
          <Button className="!bg-[#F2F2F2] !text-black !text-[12px] px-10 !rounded-xl">
            Request a demo
          </Button>
          <Button className="!bg-[#FE4A23] !text-white !text-[12px] px-10 !rounded-xl">
            Start for free
          </Button>
        </div>
      </div>
    </div>
  );
};
