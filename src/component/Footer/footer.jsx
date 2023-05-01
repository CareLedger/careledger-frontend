import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full  border border-[#63C5D260] border-x-0 py-[40px] ">
        <div className="w-full max-w-[85%] m-auto">
          <ul className="flex justify-between cursor-pointer">
            <div>
              <li className="text-[color:var(--text-color)] text-[20px] font-bold">
                Logo
              </li>
            </div>
            <div className="flex gap-x-5 items-center">
              <li className="text-[color:var(--text-color)]">Home</li>
              <li className="text-[color:var(--text-color)]">About</li>
              <li className="text-[color:var(--text-color)]">Features</li>
              <li className="text-[color:var(--text-color)]">Contact Us</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[85%] m-auto py-[40px]">
        <div className="flex justify-between items-center ">
          <div className="flex gap-x-[25px]">
            <div className="h-[40px] w-[40px] bg-[#63C5D260] rounded-[50px] flex items-center justify-center">
              <BsFacebook color="#63C5D2" size={20} />
            </div>

            <div className="h-[40px] w-[40px] bg-[#63C5D260] rounded-[50px] flex items-center justify-center">
              <AiOutlineTwitter color="#63C5D2" size={30} />
            </div>

            <div className="h-[40px] w-[40px] bg-[#63C5D260] rounded-[50px] flex items-center justify-center">
              <BsInstagram color="#63C5D2" size={20} />
            </div>

            <div className="h-[40px] w-[40px] bg-[#63C5D260] rounded-[50px] flex items-center justify-center">
              <BsLinkedin color="#63C5D2" size={20} />
            </div>
          </div>

          <div>
            <p className="text-white">&copy; CareLedger 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
