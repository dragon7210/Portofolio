import React from "react";
type Props = {
  data: any;
};

const Site: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-[#22222280] w-[380px] rounded-[20px]">
      <img alt="img" src={data[0]} className="h-[20vh] rounded-t-[20px]" />
      <div className="flex py-4 justify-between px-4">
        <p className="font-[Sofia] text-white">{data[1]}</p>
        <a href={data[2]}>
          <p className="text-[#64ffda]  font-[Molle]">{data[2]}</p>
        </a>
      </div>
    </div>
  );
};

export default Site;
