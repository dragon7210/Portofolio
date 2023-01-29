import { TypeAnimation } from "react-type-animation";
import SideBar from "../../components/sideBar";

const Work = () => {
  return (
    <div className="bg-[#112240] py-20 px-20 xl:px-40 lg:h-[calc(100vh_-_176px)]">
      <TypeAnimation
        sequence={["Where I've Worked", 2000, ""]}
        speed={10}
        repeat={Infinity}
        style={{ color: "#64ffda", fontSize: "40px", fontFamily: "Sofia" }}
        className="font-effect-neon"
      />
      <SideBar />
    </div>
  );
};

export default Work;
