import Maker from "../../assets/svg/maker.svg";
import Github from "../../assets/svg/github.svg";
import Phone from "../../assets/svg/phone.svg";
import Mail from "../../assets/svg/mail.svg";
import Skype from "../../assets/svg/skype.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0a192f] py-1 px-40 lg:flex justify-between ">
      <div className="opacity-60 my-5">
        <p className="text-[#64ffda] px-2 font-bold">Address</p>
        <div className="flex">
          <img src={Maker} alt="maker" className="w-[17px]" />
          <div className="ml-[20px]">
            <p className="text-white">299 Danforth Avenue</p>
            <p className="text-white">Toronto ON</p>
          </div>
        </div>
      </div>
      <div className="opacity-60 my-5">
        <p className="text-[#64ffda]  px-2 font-bold">Online Profile</p>
        <div className="flex">
          <img src={Github} alt="maker" className="w-[17px]" />
          <div className="ml-[20px]">
            <a href="https://github.com/dragon7210">
              <p className="text-white">https://github.com/dragon7210</p>
            </a>
            <Link to="/resume/Isa.pdf" target="_blank" download>
              <p className="text-white">Resume Download</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="opacity-60 my-5">
        <p className="text-[#64ffda]  px-2 font-bold">Contact</p>
        <div className="flex">
          <img src={Phone} alt="phone" className="w-[12px]" />
          <p className="text-white ml-5">+1 254-221-1884</p>
        </div>
        <div className=" flex">
          <img src={Mail} alt="mail" className="w-[12px]" />
          <p className="text-white ml-5">firedragon7210@gmail.com</p>
        </div>
        <div className="flex">
          <img src={Skype} alt="skype" className="w-[12px]" />
          <p className="text-white ml-5">live:.cid.6b3be79ded813cc6</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
