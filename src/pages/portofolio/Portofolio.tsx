import { TypeAnimation } from "react-type-animation";

const Portofolio = () => {
  return (
    <div className="bg-[#112240] py-20 px-20 h-[calc(100vh_-_176px)]">
      <TypeAnimation
        sequence={["Portofolio", 2000, ""]}
        speed={10}
        repeat={Infinity}
        style={{ color: "#64ffda", fontSize: "40px", fontFamily: "Sofia" }}
        className="font-effect-neon"
      />
    </div>
  );
};

export default Portofolio;
