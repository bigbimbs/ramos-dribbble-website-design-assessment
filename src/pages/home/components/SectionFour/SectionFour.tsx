import { useCustomAnimation } from "@/hooks";
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
    opacity: 0.8,
    scale: 1,
    y: 200,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const SectionFour = () => {
  const { control: firstAnimationControl, ref: firstAnimationRef } =
    useCustomAnimation(1);

  const subSections = ["Instant Insights", "Ai technology", "Easy integration"];
  return (
    <div className="bg-[#F9F9F9] rounded-s-[80px]  mx-1 pt-[80px] relative">
      <div className="absolute left-20 pt-[90px]">
        <motion.div
          variants={firstAnimationVariant}
          animate={firstAnimationControl}
        >
          <h2 className="text-[36px] max-w-[500px]">
            Turning data into real actions and ideas
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5 mt-10">
          {subSections.map((sec, index) => (
            <motion.div
              key={index}
              variants={firstAnimationVariant}
              animate={firstAnimationControl}
            >
              <div className="rounded-[20px] shadow-xl shadow-[#01010110] p-3 flex justify-between w-[300px] items-center">
                <p>{sec}</p>
                <div className="h-10 w-10 rounded-full bg-[#EFEFEF] flex justify-center items-center">
                  <p className="bg-transparent">+</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div ref={firstAnimationRef}>
        <img src="/images/ramos.png" className="w-full h-auto" />
      </div>
    </div>
  );
};
