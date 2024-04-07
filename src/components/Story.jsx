import React from "react";

// !components
import ShareButton from "./ShareButton";

// ! assets
import { metaIcon, whatsappIcon, xIcon } from "../assets";

const Story= ({ choice }) => {

  const socialMediaBtns = [
    {
      id: 2,
      icon: whatsappIcon,
      name: `whatsapp`,
    },
    {
      id: 1,
      icon: metaIcon,
      name: `meta`,
    },
    {
      id: 3,
      icon: xIcon,
      name: `X corp`,
    },
  ];

  return (
    <>
      <div
        className={` py-8  border-black flex flex-col justify-center items-center px-6 bg-cover bg-center`}
      >
        <div className="max-w-5xl w-full  bg-opacity-80 rounded-lg shadow-lg">
          <p
            className={`font-serif text-left text-xl text-white  leading-relaxed`}
          >
           👼 {choice.message.content} 
          </p>
        </div>

        <div>
          <h2 className=" font-serif text-[#10b981] font-[500] text-xl mt-8">
            Share On
          </h2>
        </div>
        <div className="flex w-[100%] justify-center items-center gap-6 py-2 ">
          {socialMediaBtns?.map((el) => (
            <ShareButton key={el?.id} el={el} story={choice.message.content} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Story;
