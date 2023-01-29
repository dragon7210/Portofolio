import { Techlists } from "../../constant";

const Technology = () => {
  return (
    <div className="mt-5 grid grid-cols-3 w-[70%]">
      {Techlists.map((list, index) => (
        <div key={index} className="flex text-[#64ffda] items-center mt-3">
          <img
            src={list[1]}
            className="w-6 h-6 mr-5 rounded-[50%]"
            alt="techImg"
          />
          <span className="text-[#8892b0] font-[Sofia] text-[18px]">
            {" "}
            {list[0]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Technology;
