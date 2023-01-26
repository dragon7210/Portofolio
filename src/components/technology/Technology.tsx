import { Techlists } from "../../constant";

const Technology = () => {
  return (
    <div className="mt-5">
      {Techlists.map((list, index) => (
        <li key={index} className="text-[#64ffda] ">
          <span className="text-[#8892b0] "> {list}</span>
        </li>
      ))}
    </div>
  );
};

export default Technology;
