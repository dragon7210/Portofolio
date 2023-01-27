import Photo from "../../assets/img/photo.png";
import Technology from "../../components/technology";

const About = () => {
  return (
    <div className="bg-[#112240] py-20 px-40 h-[calc(100vh_-_176px)] flex">
      <div className="w-[60%] mx-auto mt-10">
        <p className="text-[#64ffda] text-[50px]">About me</p>
        <p className="text-[#8892b0] text-[20px] mt-10">
          Hello! My name is Isa Noguchi and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients. I also recently launched a course that covers
          everything you need to build a web app with the Spotify API using Node
          & React.
        </p>
        <p className="text-[#64ffda] text-[20px] mt-10">
          Here are a few technologies I’ve been working with recently:
        </p>
        <Technology />
      </div>
      <div className="opacity-30 hover:opacity-80 mt-16">
        <img src={Photo} alt="profile" className="rounded-[50%]" />
      </div>
    </div>
  );
};

export default About;
