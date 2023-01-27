import { TypeAnimation } from "react-type-animation";
import SideBar from "../../components/sideBar";

const Work = () => {
  return (
    <div className="bg-[#112240] py-20 px-40 h-[calc(100vh_-_176px)]">
      <TypeAnimation
        sequence={["Where I've Worked", 2000, ""]}
        speed={10}
        repeat={Infinity}
        style={{ color: "#64ffda", fontSize: "40px" }}
      />
      <SideBar />
    </div>
  );
};

export default Work;
