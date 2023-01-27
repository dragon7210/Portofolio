import Maker from "../../assets/svg/maker.svg";
import Github from "../../assets/svg/github.svg";

const Footer = () => {
  return (
    <div className="bg-[#0a192f] py-4 px-40 flex justify-between">
      <div className="opacity-60">
        <p className="text-[#64ffda] text-center">Address</p>
        <div className="flex">
          <img src={Maker} alt="maker" className="w-[17px]" />
          <div className="ml-[20px]">
            <p className="text-white">299 Danforth Avenue</p>
            <p className="text-white">Toronto ON</p>
          </div>
        </div>
      </div>
      <div className="opacity-60">
        <p className="text-[#64ffda] text-center">Online Profile</p>
        <div className="flex">
          <img src={Github} alt="maker" className="w-[17px]" />
          <div className="ml-[20px]">
            <p className="text-white">https://github.com/dragon7210</p>
          </div>
        </div>
      </div>
      <div className="opacity-60">
        <p className="text-[#64ffda] text-center">contact</p>
        <div className="flex">
          <img src={Maker} alt="maker" className="w-[17px]" />
          <div className="ml-[20px]">
            <p className="text-white">299 Danforth Avenue</p>
            <p className="text-white">Toronto ON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
