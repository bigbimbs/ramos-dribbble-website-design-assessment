import { FastEasy } from "./FastEasy";
import { WidgetControl } from "./WidgetControl";

export const SectionTwo = () => {
  return (
    <div className="bg-[#F9F9F9] rounded-[80px] py-[80px] mx-1 px-[80px]">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-[32px] word-spacing-thin max-w-[500px]">
          Your key to strategic success through analytics
        </h3>
        <p className="mr-10">
          Ready for exciting, instantaneous,
          <br />
          all-accessible insights in real time?
        </p>
      </div>
      <div className="grid grid-cols-5 gap-5">
        <FastEasy />
        <WidgetControl />
      </div>
      <div className="flex items-center justify-center mt-20 gap-8">
        <div className="flex gap-3">
          <p className="mt-[95px] text-[16px]">Up to</p>
          <h2 className="text-[102px] p-0 m-0">45%</h2>
        </div>
        <p className="max-w-[400px] text-[13px]">
          Increase your analytics efficiency by up to 45%. Unique algorithms
          provide insights from data reduce time for analysis and save time for
          making important. Informed decisions
        </p>
      </div>
      <></>
    </div>
  );
};
