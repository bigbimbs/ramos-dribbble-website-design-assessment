export const SectionFour = () => {
  const subSections = ["Instant Insights", "Ai technology", "Easy integration"];
  return (
    <div className="bg-[#F9F9F9] rounded-s-[80px] pt-[80px] mx-1 px-[80px],relative">
      <div className="absolute left-20">
        <h2 className="text-[36px] max-w-[500px]">
          Turning data into real actions and ideas
        </h2>
        <div className="flex flex-col gap-5 mt-10">
          {subSections.map((sec, index) => (
            <div
              key={index}
              className="rounded-[20px] shadow-xl shadow-[#01010110] p-3 flex justify-between w-[300px] items-center"
            >
              <p>{sec}</p>
              <div className="h-10 w-10 rounded-full bg-[#EFEFEF] flex justify-center items-center">
                <p className="bg-transparent">+</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src="/images/ramos.png" className="w-full h-auto" />
      </div>
    </div>
  );
};
