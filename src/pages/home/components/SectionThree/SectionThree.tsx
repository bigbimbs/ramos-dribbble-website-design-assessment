import { Button } from "@/components/Elements/Button";
import { useCustomAnimation } from "@/hooks";
import { motion } from "@/lib/framer";
import { useRef, useState, useEffect } from "react";
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
    y: 100,
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
    y: 50,
    rotate: 8,
    transition: { duration: 1, ease: "easeOut" },
  },
};
export const SectionThree = () => {
  const { control: firstAnimationControl, ref: firstAnimationRef } =
    useCustomAnimation();

  const { control: secondAnimationControl, ref: secondAnimationRef } =
    useCustomAnimation(0.4);

  const scrollParentRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (scrollParentRef.current) {
      setWidth(scrollParentRef.current.offsetWidth + 20);
    }
  }, []);

  return (
    <div className="px-20 py-[100px]">
      <div>
        <h2 className="text-[80px] word-spacing-thinner h-[110px] overflow-hidden flex gap-3">
          Maximize{" "}
          <motion.div
            ref={firstAnimationRef}
            variants={firstAnimationVariant}
            animate={firstAnimationControl}
          >
            <span className="text-[#CCCCCC]">efficiency</span>
          </motion.div>
        </h2>
      </div>
      <h2 className="text-[80px] mt-[-10px] word-spacing-thin flex gap-3 h-[110px] overflow-hidden">
        with our{" "}
        <motion.div
          ref={secondAnimationRef}
          variants={secondAnimationVariant}
          animate={secondAnimationControl}
        >
          intuitive
        </motion.div>
      </h2>
      <div className="mt-10 flex justify-between">
        <div className="flex">
          <div className="h-40 w-40 bg-[#F2F2F2] z-10 rounded-full flex items-center">
            <img
              src="/icons/section-three-icon-1.png"
              className="h-auto w-20 mx-auto"
            />
          </div>
          <div className="h-40 w-40 bg-[#FFD027] ml-[-30px] z-0 rounded-full flex flex-col justify-center items-center">
            <h3 className="text-[24px] font-bold">45%</h3>
            <p className="text-[10px] text-center">
              System grow
              <br />
              faster
            </p>
          </div>
        </div>
        <div className="h-40 w-[460px] bg-[#FFD027] rounded-[80px] overflow-hidden flex items-center">
          <motion.div
            ref={scrollParentRef}
            className="child"
            initial={{ x: 0 }}
            animate={{ x: -width }} // Use the measured width
            transition={{
              x: { repeat: Infinity, duration: 10, ease: "linear" },
            }}
          >
            <h4 className="text-nowrap text-[120px]">Analytics Service</h4>
          </motion.div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-[#F2F2F2] my-20"></div>
      <div className="flex justify-between items-center">
        <p className="max-w-[650px] text-[13px]">
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
