export const ImprovedCustomerService = () => {
  return (
    <div className="border rounded-3xl pt-5 pb-10 px-20 flex flex-col justify-center shadow-lg text-center">
      <div className="grid grid-cols-2 justify-center">
        <div className="shadow-md z-0 py-8 px-3 h-fit text-center flex flex-col justify-center items-center rounded-2xl">
          <p className="text-[10px]">Conversion rate</p>
          <div className="bg-[#FFD028] relative w-fit px-4 py-2 rounded-2xl mt-4">
            <div className="absolute w-5 h-5 top-[-5px] left-[-5px] bg-[#CCCCCC] rounded-full  flex items-center">
              <img
                src="/icons/section-five-icon-1.png"
                className="h-[13px] w-auto mx-auto rounded-full"
              />
            </div>
            <h3 className="text-[24px]">2,3%</h3>
          </div>
          <p className="text-[10px] text-[#CCCCCC] mt-4">
            Percentage of
            <br />
            website visitors
          </p>
        </div>
        <div className="shadow-2xl z-10 bg-white py-2 mt-10 ml-[-40px] px-8 text-center flex flex-col justify-center items-center rounded-2xl">
          <p className="text-[10px] text-[#CCCCCC] mt-4">Sales revenue</p>

          <h3 className="text-[20px] text-start mt-1 mb-3">
            <span className="text-[16px] me-1">$</span>131,2K
          </h3>
          <div className="grid grid-cols-3 gap-[1px] w-full mb-3">
            <div className="w-full h-[3px] rounded-lg bg-[#38C379]"></div>
            <div className="w-full h-[3px] rounded-lg bg-[#FFD028]"></div>
            <div className="w-full h-[3px] rounded-lg bg-[#38C379]"></div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-1 items-center">
                <div className="w-5 h-5 rounded-full bg-black"></div>
                <p className="text-[8px] text-[#CCCCCC]">Min price</p>
              </div>
              <h4 className="text-[12px] ">1,200 $</h4>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-1 items-center">
                <div className="w-5 h-5 rounded-full bg-black"></div>
                <p className="text-[8px] text-[#CCCCCC]">Min price</p>
              </div>
              <h4 className="text-[12px]">2,200 $</h4>
            </div>
          </div>
          <div className="my-3 w-full h-[1px] bg-[#cccccc93]"></div>
          <div className="flex justify-between w-full">
            <p className="text-[8px] text-[#CCCCCC]">Engagement rate</p>
            <h4 className="text-[12px]">47.64%</h4>
          </div>
        </div>
      </div>

      <h4 className="mt-6 mb-3 text-[20px]">Improved customer service</h4>
      <div className="flex justify-center">
        <p className="text-[13px] max-w-[400px]">
          Analytics helps optimize service processes by providing information on
          how to improve interactions with customers and increase their
          satisfaction
        </p>
      </div>
    </div>
  );
};
