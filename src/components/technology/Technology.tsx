import { Techlists } from "../../constant";

const Technology = () => {
  return (
    <div className="mt-5 w-[100%] mx-auto">
      <p className="text-[#64ffda] text-[25px] mt-10 font-effect-fire">
        Here are a few technologies I’ve been working with recently:
      </p>
      <div className="grid grid-cols-3 mt-5">
        {Techlists.map((list, index) => (
          <div key={index} className="flex text-[#64ffda] items-center mt-3">
            <img
              src={list[1]}
              className="w-6 h-6 mr-5 rounded-[50%]"
              alt="techImg"
            />
            <span className="text-[#8892b0] text-[18px]">{list[0]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
