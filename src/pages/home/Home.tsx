import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="bg-[#112240] py-20 px-20 h-[calc(100vh_-_176px)]">
      <div className="w-[60%] mx-auto mt-10">
        <p className="text-[20px] text-[#64ffda]">Hi, my name is</p>
        <TypeAnimation
          sequence={["Isa Noguchi", 2000, ""]}
          speed={10}
          repeat={Infinity}
          style={{ color: "#64ffda", fontSize: "55px" }}
        />
        <p className="text-[#ccd6f6] text-[50px] mt-3">
          I build things for the web.
        </p>
        <p className="text-[#8892b0] mt-3 text-[20px] w-[80%]">
          I am a passionate software engineer who started programming in grade
          school. After getting my bachelor's degree in computer science, I
          worked for two large international companies–developing mostly web
          applications for several years. I am accustomed to a distributed
          environment and working with remote clients using agile methodologies.
        </p>
        <button className="border-[#64ffda] px-4 py-2 border-solid border-[2px] mt-10">
          <p className="text-[#64ffda]">Check out my course</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
