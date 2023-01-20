import Address from "../../components/address";
import { Lists } from "../../constant";

const Contact = () => {
  return (
    <div className="bg-[#1d1e20] h-[calc(100vh_-_56px)] flex justify-between py-20 px-20">
      <div className="w-[60%]">
        <p className="text-white text-[80px] mb-[50px]">Let's talk</p>
        {Lists.map((list, index) => (
          <Address key={index} title={list[0]} content={list[1]} />
        ))}
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

export default Contact;
