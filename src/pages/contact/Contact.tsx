const Contact = () => {
  return (
    <div className="bg-[#1d1e20] h-[calc(100vh_-_56px)] flex justify-between py-20 px-20">
      <div className="w-[60%]">
        <p className="text-white text-[80px]">Let's talk</p>
        <p className="text-yellow-500 text-[40px] mt-5">
          Email address : isanoguchi721@gmail.com
        </p>
        <p className="text-yellow-500 text-[40px] mt-5">
          Skype address : isanoguchi721@gmail.com
        </p>
        <p className="text-yellow-500 text-[40px] mt-5">
          Telegram address : isanoguchi721@gmail.com
        </p>
        <p className="text-yellow-500 text-[40px] mt-5">
          Discord address : isanoguchi721@gmail.com
        </p>
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
