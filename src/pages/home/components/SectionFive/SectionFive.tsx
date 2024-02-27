import { useCustomAnimation } from "@/hooks";
import { ImprovedCustomerService } from "./ImprovedCustomerService";
import { MonitoringKeyIndicators } from "./MonitoringKeyIndicators";
import { motion } from "@/lib/framer";

const firstAnimationVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: {
    opacity: 0,
    scale: 1,
    y: 10,
    rotate: 5,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const secondAnimationVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: {
    opacity: 1,
    scale: 1,
    y: 70,
    rotate: 5,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const SectionFive = () => {
  const { control: firstAnimationControl, ref: firstAnimationRef } =
    useCustomAnimation();

  const { control: secondAnimationControl, ref: secondAnimationRef } =
    useCustomAnimation(0.5);
  return (
    <div className="py-[100px] px-20">
      <h2 className="text-[100px] word-spacing-thinner">We give you full</h2>
      <h2 className="text-[100px] mt-[-40px] word-spacing-thinner flex">
        <span className="text-[#CCCCCC]">control</span>
        <motion.div
          ref={firstAnimationRef}
          variants={firstAnimationVariant}
          animate={firstAnimationControl}
          className="h-[140px] overflow-hidden flex gap-3 ml-3"
        >
          over{" "}
          <motion.div
            ref={secondAnimationRef}
            variants={secondAnimationVariant}
            animate={secondAnimationControl}
          >
            your data
          </motion.div>
        </motion.div>
      </h2>
      <div className="grid mt-10 grid-cols-2 gap-2">
        <ImprovedCustomerService />
        <MonitoringKeyIndicators />
      </div>
    </div>
  );
};
