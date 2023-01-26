import Address from "../../components/address";
import { Lists } from "../../constant";

const Contact = () => {
  return (
    <div className="bg-[#112240] py-20 px-20 h-[calc(100vh_-_72px)]">
      <div className="w-[60%]">
        <p className="text-white text-[80px] mb-[50px]">Let's talk</p>
        {Lists.map((list, index) => (
          <Address key={index} title={list[0]} content={list[1]} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
