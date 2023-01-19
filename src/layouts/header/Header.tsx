import { useState } from "react";

const tabNames = ["Home", "About", "Work", "Contact"];

const Header = () => {
  const [selTab, setSelTab] = useState(0);
  return (
    <div className="bg-black h-14 px-14 flex justify-between">
      <div className="flex my-auto">
        {tabNames.map((tabName, index) => (
          <p
            key={index}
            className={`${
              selTab === index ? " text-yellow-500" : "text-white"
            } mx-4 cursor-pointer hover:text-yellow-500`}
            onClick={() => setSelTab(index)}
          >
            {tabName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;
