import { Button } from "@/components/Elements/Button";
import { useCustomAnimation } from "@/hooks";
import { motion } from "@/lib/framer";

const firstAnimationVariant = {
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hidden: {
    opacity: 0.9,
    y: 40,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const Header = () => {
  const { control: firstAnimationControl, ref: firstAnimationRef } =
    useCustomAnimation();
  return (
    <div className="mt-3 bg-[#0D0D0D] h-14 mx-3 rounded-xl px-2 overflow-hidden">
      <motion.div
        ref={firstAnimationRef}
        variants={firstAnimationVariant}
        animate={firstAnimationControl}
        className="flex items-center justify-between h-full"
      >
        <div className="flex items-center gap-1 pl-4">
          <img src="/icons/logo.png" className="h-3" />
          <h6 className="text-[#F5F5F5]">ramos</h6>
        </div>
        <div className="bg-[#252525] rounded-lg flex items-center gap-5 text-[#D6D6D6] my-2 py-3 px-4 text-[10px]">
          <Button.Link
            size="sm"
            className="!p-[0] !bg-transparent !text-[#D6D6D6] !border-none !text-[11px]"
            variant="text"
            to=""
          >
            Dashboard
          </Button.Link>
          <Button.Link
            size="sm"
            className="!p-[0] !bg-transparent !text-[#D6D6D6] !border-none !text-[11px]"
            variant="text"
            to=""
          >
            Reports
          </Button.Link>
          <Button.Link
            size="sm"
            className="!p-[0] !bg-transparent !text-[#D6D6D6] !border-none !text-[11px]"
            variant="text"
            to=""
          >
            Documents
          </Button.Link>
          <Button.Link
            size="sm"
            className="!p-[0] !bg-transparent !text-[#D6D6D6] !border-none !text-[11px]"
            variant="text"
            to=""
          >
            History
          </Button.Link>
          <Button.Link
            size="sm"
            className="!p-[0] !bg-transparent !text-[#D6D6D6] !border-none !text-[11px]"
            variant="text"
            to=""
          >
            Settings
          </Button.Link>
        </div>
        <div className="">
          <Button className="!rounded-xl !bg-white text-black !text-[13px] py-3">
            <span className="text-black px-3 opacity-80">Sign Up</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
