import { TypeAnimation } from "react-type-animation";
import SiteComponent from "../../components/site";
import { Data } from "../../constant";

const Portofolio = () => {
  return (
    <div className="bg-[#112240] py-20 px-20 xl:h-[calc(100vh_-_216px)]">
      <div className="ml-[10%]">
        <TypeAnimation
          sequence={["Portofolio", 2000, ""]}
          speed={10}
          repeat={Infinity}
          style={{
            color: "#64ffda",
            fontSize: "40px",
          }}
          className="font-effect-neon"
        />
      </div>

      <div className="grid grid-cols-1 mt-10 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Data.map((element, index) => (
          <SiteComponent key={index} data={element} />
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
