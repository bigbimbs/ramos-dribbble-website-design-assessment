import { Button } from "@/components/Elements/Button";

export const SectionSix = () => {
  return (
    <div className="flex flex-col items-center py-[100px]">
      <div className="w-[100px] h-[100px] rounded-[24px] shadow-2xl shadow-[#FE4A23] bg-[#FE4A23] flex items-center">
        <img
          src="/icons/section-six-icon-1.png"
          className="h-10 w-auto mx-auto"
        />
      </div>
      <h2 className="mt-5 text-[100px] word-spacing-thinner">Get Started</h2>
      <p className="max-w-[400px] mt-3 text-center text-[#CCCCCC]">
        Turn information into advantage! Start using Ramos today. Sign up for a
        free trial
      </p>
      <div className="flex justify-center mt-14 gap-2">
        <Button className="!bg-[#F2F2F2] !text-black !text-[12px] px-10 !rounded-xl">
          Request a demo
        </Button>
        <Button className="!bg-[#FE4A23] !text-white !text-[12px] px-10 !rounded-xl">
          Start for free
        </Button>
      </div>
    </div>
  );
};
