const Home = () => {
  return (
    <div className="bg-[#112240] h-[calc(100vh_-_56px)] flex justify-between py-20 px-20">
      <div className="w-[60%]">
        <p className="text-white text-[70px] font-[bolder] shadow-2xl">
          I am Isa Noguchi
        </p>
        <p className="text-[#855b72] text-[50px] mt-5 font-[bolder] shadow-2xl">
          Full-stack developer
        </p>
        <p className="text-white mt-10 text-[40px] shadow-md">
          I am a passionate software engineer who started programming in grade
          school. After getting my bachelor's degree in computer science, I
          worked for two large international companies–developing mostly web
          applications for several years. I am accustomed to a distributed
          environment and working with remote clients using agile methodologies.
        </p>
      </div>
      <div>
        <img
          src="/img/photo.png"
          alt="myPhoto"
          className="h-[calc(100vh_-_136px)]"
        />
      </div>
    </div>
  );
};

export default Home;
