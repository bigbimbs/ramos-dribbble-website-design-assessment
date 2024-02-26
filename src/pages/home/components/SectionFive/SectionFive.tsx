import { ImprovedCustomerService } from "./ImprovedCustomerService";
import { MonitoringKeyIndicators } from "./MonitoringKeyIndicators";

export const SectionFive = () => {
  return (
    <div className="py-[100px] px-20">
      <h2 className="text-[100px] word-spacing-thinner">We give you full</h2>
      <h2 className="text-[100px] mt-[-40px] word-spacing-thinner">
        <span className="text-[#CCCCCC]">control</span> over your data
      </h2>
      <div className="grid mt-10 grid-cols-2 gap-2">
        <ImprovedCustomerService />
        <MonitoringKeyIndicators />
      </div>
    </div>
  );
};
