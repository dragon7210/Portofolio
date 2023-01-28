import { TypeAnimation } from "react-type-animation";
import SiteComponent from "../../components/site";
import { Data } from "../../constant";

const Portofolio = () => {
  return (
    <div className="bg-[#112240] py-20 px-20 h-[calc(100vh_-_176px)]">
      <div className="ml-[10%]">
        <TypeAnimation
          sequence={["Portofolio", 2000, ""]}
          speed={10}
          repeat={Infinity}
          style={{
            color: "#64ffda",
            fontSize: "40px",
            fontFamily: "Sofia",
          }}
          className="font-effect-neon"
        />
      </div>

      <div className="grid grid-cols-3 mt-10 gap-6 w-[80%] mx-auto">
        {Data.map((element, index) => (
          <SiteComponent key={index} data={element} />
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
