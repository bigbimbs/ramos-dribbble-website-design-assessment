import { Button } from "@/components/Elements/Button";

export const Header = () => {
  return (
    <div className="mt-3 bg-[#0D0D0D] h-14 mx-3 rounded-lg px-2 flex items-center justify-between">
      <div className="flex items-center gap-1">
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
      <div className="py-1">
        <Button className="!rounded-xl !bg-white text-black !text-[13px] py-3">
          <span className="text-black px-0">Sign Up</span>
        </Button>
      </div>
    </div>
  );
};
