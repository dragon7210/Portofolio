const Contact = () => {
  return (
    <div className="bg-[#1d1e20] h-[calc(100vh_-_56px)] flex justify-between py-20 px-20">
      <div className="w-[60%]">
        <p className="text-white text-[80px]">Let's talk</p>
        <div className="flex mt-5 w-[75%] justify-between">
          <p className="text-yellow-500 text-[40px]">Email address</p>
          <p className="text-gray-400 text-[40px] ">isanoguchi721@gmail.com</p>
        </div>
        <div className="flex mt-5 w-[75%] justify-between">
          <p className="text-yellow-500 text-[40px]">Skype address</p>
          <p className="text-gray-400 text-[40px] ">
            live:.cid.6b3be79ded813cc6
          </p>
        </div>
        <div className="flex mt-5 w-[75%] justify-between">
          <p className="text-yellow-500 text-[40px]">Telegram address</p>
          <p className="text-gray-400 text-[40px] ">dragon721</p>
        </div>
        <div className="flex mt-5 w-[75%] justify-between">
          <p className="text-yellow-500 text-[40px]">Phone Number</p>
          <p className="text-gray-400 text-[40px] ">+1 254-221-1884</p>
        </div>
        <div className="flex mt-5 w-[75%] justify-between">
          <p className="text-yellow-500 text-[40px]">Discord address </p>
          <p className="text-gray-400 text-[40px] ">fire721#4458</p>
        </div>
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
