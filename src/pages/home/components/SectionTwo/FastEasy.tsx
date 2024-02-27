export const FastEasy = () => {
  return (
    <div className="col-span-3 shadow-xl border rounded-2xl pl-10 pt-10 grid grid-cols-2 bg-white">
      <div className="col-span-1 flex flex-col justify-between pb-4">
        <div className="text-black rounded-lg bg-[#FFD027] p-2 max-w-fit text-[10px] shadow-lg">
          Setting up reports
        </div>
        <div>
          <h3 className="mb-5 text-[20px]">
            Fast and easy access
            <br />
            to analytics
          </h3>
          <p className="text-[#A5A5A5] max-w-[320px]">
            One platform is a comprehensive system of solutions that will be the
            first step towards digitalization of your business!
          </p>
        </div>
      </div>
      <div className="col-span-1 border-s border-t rounded-ss-lg pl-4 pt-4">
        <h4 className="text-[16px]">Sales statistic</h4>
        <div className="grid grid-cols-5 items-center mt-3 pr-4">
          <div className="flex gap-5 items-center col-span-3">
            <div className="w-10 h-10 bg-[#FE4A23] rounded-full flex items-center">
              <img
                src="/icons/section-two-icon-2.png"
                className="h-3 w-auto mx-auto"
              />
            </div>
            <div className="">
              <p className="text-[12px]">Total profit</p>
              <h4 className="text-[20px] font-medium">$ 264,2K</h4>
            </div>
          </div>
          <div className="w-full bg-[#F2F3F5] px-3 py-2 rounded-xl col-span-2">
            <p className="text-[11px] mb-2">Visitors</p>
            <div className="h-1 w-full bg-[#EAEAEA] rounded-lg">
              <div className="bg-[#6ED19C] h-1 w-[30px] rounded-lg"></div>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="mt-3 text-[20px] font-medium">56k</h4>
              <span className="text-[#6ED19C] text-[8px]">+14%</span>
            </div>
          </div>
        </div>
        <div className="p-2 border-s border-t rounded-xl mt-3 h-40 relative overflow-hidden">
          <p className="text-[11px] mb-2">Visit statistics</p>
          <div className="w-28 min-h-14 p-2 bg-[#FE4A23] rounded-xl absolute right-4 bottom-4 text-white">
            <p className="text-[10px]">Rate</p>
            <h4 className="text-[20px] mt-2">+58%</h4>
          </div>
          <img
            src="/icons/section-five-icon-5.png"
            className="h-full w-auto mx-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
