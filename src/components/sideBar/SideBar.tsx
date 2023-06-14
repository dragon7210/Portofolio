import { useState } from "react";
import { Works } from "../../constant";

const SideBar = () => {
  const [selBar, setSelBar] = useState(0);
  return (
    <div className="mt-10 flex">
      <div className="lg:w-[400px] md:w-[200px]">
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
        (element: any, index) =>
          selBar === index && (
            <div key={index} className="w-[60%] md:ml-9">
              <p className="text-[30px] text-[#64ffda] font-effect-fire">
                {element[0]}
              </p>
              <p className="text-[25px] text-[#8892b0] mt-3 font-effect-emboss">
                {element[1]}
              </p>
              {element[3].map((content: string, i: number) => (
                <li key={i} className="text-[25px] mt-3 text-[#64ffda]">
                  <span className="text-[25px] text-[#8892b0] mt-3 font-effect-emboss">
                    {content}
                  </span>
                </li>
              ))}
            </div>
          )
      )}
    </div>
  );
};

export default SideBar;
