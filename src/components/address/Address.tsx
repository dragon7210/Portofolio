type Props = {
  title: string;
  content: string;
};

const Address: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="flex mt-8 w-[75%] justify-between shadow-lg ">
      <p className="text-yellow-500 text-[40px]">{title}</p>
      <p className="text-gray-400 text-[40px]">{content}</p>
    </div>
  );
};

export default Address;
