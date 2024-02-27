import { Button } from "@/components/Elements/Button";

export const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] px-20 pb-10 pt-[100px]">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-10 text-[13px]">
          <Button.Link to={"#"} className="!text-[#666666]" variant="text">
            About
          </Button.Link>
          <Button.Link to={"#"} className="!text-[#666666]" variant="text">
            Why Us
          </Button.Link>
          <Button.Link to={"#"} className="!text-[#666666]" variant="text">
            Platform
          </Button.Link>
          <Button.Link to={"#"} className="!text-[#666666]" variant="text">
            Pricing
          </Button.Link>
          <Button.Link to={"#"} className="!text-[#666666]" variant="text">
            Contacts
          </Button.Link>
        </div>
        <Button.Link
          to={"#"}
          className="!text-[48px] text-white"
          variant="text"
        >
          hello@ramos.com
        </Button.Link>
      </div>
      <div className="w-full h-[1px] bg-[#666666] my-14"></div>
      <div className="flex justify-between">
        <div className="flex gap-20">
          <div className="">
            <h5 className="text-white">Warrensville Heights</h5>
            <p className="text-[#666666]">
              14418 Vineyard Drive, NC
              <br />
              44128
            </p>
          </div>
          <div className="">
            <h5 className="text-white">Saint Louis</h5>
            <p className="text-[#666666]">
              1366 Penn Street
              <br />
              63101
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Button.Link to={"#"} className="text-white" variant="text">
            LinkedIn
          </Button.Link>
          <Button.Link to={"#"} className="text-white" variant="text">
            Instagram
          </Button.Link>
          <Button.Link to={"#"} className="text-white" variant="text">
            Facebook
          </Button.Link>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center mt-5">
        <div className="relative w-fit flex">
          <h2 className="relative text-[160px] text-white">Ramos</h2>
          <div className="absolute border-[8px] w-14 h-14 top-[50px] right-[-50px] rounded-full flex items-center justify-center text-white text-[20px] font-bold">
            R
          </div>
        </div>
        <div className="flex justify-between">
          <Button.Link to={"#"} className="!text-[#666666] mt-5" variant="text">
            Privacy policy
          </Button.Link>
          <Button.Link to={"#"} className="!text-[#666666] mt-5" variant="text">
            License agreement
          </Button.Link>
          <img src="/images/barcode.png" className="h-full w-auto" />
        </div>
      </div>
    </footer>
  );
};
