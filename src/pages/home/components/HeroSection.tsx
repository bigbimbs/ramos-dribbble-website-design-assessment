import { motion } from "@/lib/framer";
import { useCustomAnimation } from "@/hooks/useCustomAnimation";

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
    y: 50,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const secondAnimationVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    translate: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: {
    opacity: 0,
    scale: 0.1,
    y: 0,
    rotate: 0,
    translate: 0.4,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const HeroSection = () => {
  const { control: firstAnimationControl, ref: firstAnimationRef } =
    useCustomAnimation();

  const { control: secondAnimationControl, ref: secondAnimationRef } =
    useCustomAnimation(0.5);

  return (
    <section className="py-[100px] px-16 min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-3 items-start gap-10">
        <div className="col-span-2">
          <div className="pl-32">
            <div className="flex items-start justify-end w-full">
              <motion.div
                ref={secondAnimationRef}
                variants={secondAnimationVariant}
                animate={secondAnimationControl}
              >
                <div className="w-20 h-20 bg-[#F2F2F2] rounded-full flex justify-center items-center">
                  <img src="/icons/hero-icon-1.png" className="h-8" />
                </div>
              </motion.div>

              <motion.div
                ref={secondAnimationRef}
                variants={secondAnimationVariant}
                animate={secondAnimationControl}
              >
                <div className="w-20 h-20 bg-[#FE4A23] rounded-full -ml-4 flex justify-center items-center">
                  <img src="/icons/hero-icon-2.png" className="w-8" />
                </div>
              </motion.div>

              <h2 className="text-[80px] p-0 mt-[-16px] ml-5 flex">
                Anal{" "}
                <motion.div
                  ref={firstAnimationRef}
                  variants={firstAnimationVariant}
                  animate={firstAnimationControl}
                >
                  ytics
                </motion.div>
              </h2>
            </div>

            <div className="min-h-[90px] overflow-hidden">
              <h2 className="text-[80px] p-0 mt-[-20px] word-spacing-thin flex gap-2">
                that{" "}
                <motion.div
                  ref={firstAnimationRef}
                  variants={firstAnimationVariant}
                  animate={firstAnimationControl}
                >
                  <span className="text-[#CCCCCC] ml-2">helps</span> you
                </motion.div>
              </h2>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <motion.div
            ref={secondAnimationRef}
            variants={secondAnimationVariant}
            animate={secondAnimationControl}
          >
            <div className="h-[180px] w-full bg-[#F2F3F5] rounded-xl relative">
              <div className="h-10 w-10 rounded-full bg-[#FE4A23] absolute top-[-16px] left-[-16px] flex justify-center items-center">
                <img src="/icons/hero-icon-3.png" className="h-3" />
              </div>
              <img
                src="/icons/hero-icon-5.png"
                className="h-full w-auto rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 mt-[-20px]">
        <h2 className="text-[80px]">Shape</h2>
        <motion.div
          ref={secondAnimationRef}
          variants={secondAnimationVariant}
          animate={secondAnimationControl}
          className="ml-2"
        >
          <div className="w-20 h-20 bg-[#FFD027] rounded-full flex justify-center items-center">
            <img src="/icons/hero-icon-4.png" className="h-8 ml-[-3px]" />
          </div>
        </motion.div>
        <motion.div
          ref={firstAnimationRef}
          variants={firstAnimationVariant}
          animate={firstAnimationControl}
          className="flex gap-2 ml-2"
        >
          <h2 className="text-[80px]">the</h2>
          <h2 className="text-[80px]">future</h2>
        </motion.div>
      </div>
    </section>
  );
};
