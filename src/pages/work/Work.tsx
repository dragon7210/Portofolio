import WorkHistory from "../../components/workHistory";
import { Works } from "../../constant";

const Work = () => {
  return (
    <div className="bg-[#112240] py-20 px-20 h-[calc(100vh_-_72px)]">
      {Works.map((ele, index) => (
        <WorkHistory
          key={index}
          type={ele[0]}
          during={ele[1]}
          title={ele[2]}
          content={ele[3]}
        />
      ))}
    </div>
  );
};

export default Work;
