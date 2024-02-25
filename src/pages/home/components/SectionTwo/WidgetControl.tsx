export const WidgetControl = () => {
  return (
    <div className="col-span-2 rounded-3xl bg-[#0D0D0D] pt-10 px-5  flex flex-col items-center">
      <div className="grid grid-cols-2 justify-center gap-2 w-full max-w-[300px]">
        <div className="shadow shadow-[#a5a5a57a] text-white rounded-3xl p-3 w-full">
          <div className="bg-"></div>
        </div>
        <div className="shadow shadow-[#a5a5a57a] text-white rounded-3xl p-3 w-full">
          <p className="mb-3 text-[10px]">Transactions</p>
          <div className="flex items-center gap-2 justify-end">
            {/* <h4 className="mt-3 text-[20px] font-medium">56k</h4> */}
            <span className="text-[#6ED19C] text-[8px]">+14%</span>
          </div>
          <h4 className="text-[32px]">43K</h4>
        </div>
      </div>
      <h4 className="mt-10 mb-5 text-center text-white text-[18px]">
        Widget control
      </h4>
      <div className="max-w-[380px]">
        <p className="text-[#A5A5A5] text-center">
          Reports provide a comprehensive overview of important aspects of web
          analytics
        </p>
      </div>
    </div>
  );
};
