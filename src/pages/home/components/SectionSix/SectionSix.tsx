import { Button } from "@/components/Elements/Button";
import { useCustomAnimation } from "@/hooks";
import { motion } from "@/lib/framer";

const firstAnimationVariant = {
  visible: {
    opacity: 1,
    scaleY: 1,
    scaleX: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: {
    opacity: 0.5,
    scaleY: 1.5,
    scaleX: 1.5,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const secondAnimationVariant = {
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
  hidden: {
    opacity: 0.8,
    y: 20,
    x: 0,
    rotate: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const thirdAnimationVariant = {
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: {
    opacity: 0.8,
    y: 70,
    x: 0,
    rotate: 10,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fourthAnimationVariant = {
  visible: {
    opacity: 1,
    y: 20,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: {
    opacity: 0.9,
    y: 60,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const SectionSix = () => {
  const { control: firstAnimationControl, ref: firstAnimationRef } =
    useCustomAnimation();

  const { control: secondAnimationControl, ref: secondAnimationRef } =
    useCustomAnimation(0.5);

  const { control: thirdAnimationControl, ref: thirdAnimationRef } =
    useCustomAnimation(0.5);

  const { control: fourthAnimationControl, ref: fourthAnimationRef } =
    useCustomAnimation(1);

  return (
    <div className="flex flex-col items-center py-[100px]">
      <motion.div
        ref={firstAnimationRef}
        variants={firstAnimationVariant}
        animate={firstAnimationControl}
      >
        <div className="w-[100px] h-[100px] rounded-[24px] shadow-2xl shadow-[#FE4A23] bg-[#FE4A23] flex items-center">
          <img
            src="/icons/section-six-icon-1.png"
            className="h-10 w-auto mx-auto"
          />
        </div>
      </motion.div>

      <h2 className="mt-5 text-[100px] word-spacing-thinner h-[120px] overflow-hidden flex gap-3">
        <motion.div
          ref={secondAnimationRef}
          variants={secondAnimationVariant}
          animate={secondAnimationControl}
        >
          Get
        </motion.div>

        <motion.div
          ref={thirdAnimationRef}
          variants={thirdAnimationVariant}
          animate={thirdAnimationControl}
        >
          Started
        </motion.div>
      </h2>
      <motion.div
        ref={fourthAnimationRef}
        variants={fourthAnimationVariant}
        animate={fourthAnimationControl}
      >
        <p className="max-w-[400px] mt-3 text-center text-[#CCCCCC]">
          Turn information into advantage! Start using Ramos today. Sign up for
          a free trial
        </p>
        <div className="flex justify-center mt-14 gap-2">
          <Button className="!bg-[#F2F2F2] !text-black !text-[12px] px-10 !rounded-xl">
            Request a demo
          </Button>
          <Button className="!bg-[#FE4A23] !text-white !text-[12px] px-10 !rounded-xl">
            Start for free
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
