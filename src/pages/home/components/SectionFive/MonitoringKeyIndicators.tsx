export const MonitoringKeyIndicators = () => {
  return (
    <div className="border rounded-3xl pt-5 pb-10 px-20 flex flex-col justify-center shadow-lg text-center">
      <div className="flex flex-col items-center w-full justify-center">
        <div className="w-[50%] h-8 bg-[#FFFFFF] rounded-xl border shadow"></div>
        <div className="w-[60%] h-12 bg-[#FFFFFF] rounded-xl border mt-[-15px] p-2 shadow-lg">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 border rounded-md bg-[#CCCCCC]"></div>
            <p className="text-[10px] font-medium">Financial reports</p>
          </div>
        </div>
        <div className="w-[70%] p-2 bg-[#FFFFFF] rounded-xl border mt-[-15px] shadow-lg">
          <div className="grid grid-cols-3 align-bottom items-end">
            <div className="col-span-1 flex flex-col justify-between gap-10">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 border rounded-md bg-[#CCCCCC]"></div>
                <p className="text-[10px] font-medium">Insights</p>
              </div>
              <div>
                <p className="text-[10px] text-[#CCCCCC] mb-0 text-start mt-5">
                  Total profit
                </p>
                <h3 className="text-[20px] text-start">
                  <span className="text-[16px] me-1">$</span>262,2K
                </h3>
                <div className="bg-[#FFCF27] rounded-lg text-[10px] mt-4 px-2 py-[4px] w-fit">
                  Data visualization
                </div>
              </div>
            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>

      <h4 className="mt-6 mb-3 text-[20px]">Monitoring key indicators</h4>
      <div className="flex justify-center">
        <p className="text-[13px] max-w-[300px]">
          Analytics platforms allow business to track KPIs, an important tool
          for measuring success and achieving goals.
        </p>
      </div>
    </div>
  );
};
