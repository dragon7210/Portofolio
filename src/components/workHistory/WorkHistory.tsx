type Props = {
  type: string;
  during: string;
  title: string;
  content: string;
};

const WorkHistory: React.FC<Props> = ({ type, during, title, content }) => {
  return (
    <div className="flex bg-[#e2d9d9] rounded-lg px-20 py-4 shadow-lg h-[200px] mb-14">
      <div className="w-[40%] my-auto">
        <p className="text-[30px] px-4">{type}</p>
        <p className="text-[20px] mt-5 px-4">{during}</p>
      </div>
      <div className="my-auto">
        <p className="text-[25px] mb-6">{title}</p>
        <p className="text-[20px]">{content}</p>
      </div>
    </div>
  );
};

export default WorkHistory;
