import { useState } from "react";
import { Works } from "../../constant";

const SideBar = () => {
  const [selBar, setSelBar] = useState(0);
  return (
    <div className="mt-10 flex">
      <div className="w-[400px]">
        {Works.map((element, index) => (
          <p
            key={index}
            className={`${
              selBar !== index
                ? "text-[#8892b0] hover:text-[#64ffda]  hover:border-[#64ffda] cursor-pointer"
                : "text-[#64ffda] border-[#64ffda]"
            } py-4 border-l-2 pl-5`}
            onClick={() => setSelBar(index)}
          >
            {element[2]}
          </p>
        ))}
      </div>
      {Works.map(
        (element, index) =>
          selBar === index && (
            <div key={index} className="w-[60%]">
              <p className="text-[25px] text-[#64ffda]">{element[0]}</p>
              <p className="text-[20px] text-[#8892b0] mt-3">{element[1]}</p>
              <p className="text-[20px] text-[#8892b0] mt-3">{element[3]}</p>
            </div>
          )
      )}
    </div>
  );
};

export default SideBar;
