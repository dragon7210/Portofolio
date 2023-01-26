import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const tabNames = ["Home", "About", "Work", "Contact"];

const Header = () => {
  const [selTab, setSelTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (selTab === 0) {
      navigate("/");
    }
    if (selTab === 1) {
      navigate("/about");
    }
    if (selTab === 2) {
      navigate("/work");
    }
    if (selTab === 3) {
      navigate("/contact");
    }
  }, [navigate, selTab]);

  return (
    <div className="bg-[#0a192f] py-4 px-20  flex justify-between">
      <div className="w-[40px] my-auto">
        <img src="img/logo.png" alt="logo" />
      </div>
      <div className="flex my-auto">
        {tabNames.map((tabName, index) => (
          <p
            key={index}
            className={`${
              selTab === index ? " text-[#64ffda]" : "text-white"
            } mx-8 cursor-pointer hover:text-[#64ffda]`}
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
