import React from "react";
import Navbar from "../../../component/Navbar/navbar";
import doctor from "../../../assets/blocks.svg";

const Hero = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full max-w-[100%] m-auto flex h-[90vh] justify-center items-center">
        <div className="w-1/2 flex mt-[20px] flex-col hero-box pl-[7%] ">
          <h1 className="text-[color:var(--text-color)] mt-[40px] text-[50px] w-[90%] max-w-[405px]  leading-[1.2] font-bold  ">
            Take Your{" "}
            <span className="bg-gradient-to-r from-[#63C5D2] to-[#FF91A4] text-transparent bg-clip-text">
              Clinical Trials
            </span>{" "}
            To The{" "}
            <span className="bg-gradient-to-r from-[#63C5D2] to-[#FF91A4] text-transparent bg-clip-text">
              Next Level
            </span>
          </h1>
          <p className="text-[color:var(--text-color)] text-[15px] w-[80%] mt-[20px] leading-[25px]">
            Careledger is a blockchain medical online platform designed to
            manage patient's information efficiently.{" "}
          </p>
          <button className="border mt-[30px] border-[#63C5D2] bg-[#63C5D2] w-full max-w-[30%] text-[color:var(--text-color)] px-3 py-[8px] rounded-[50px] hover:bg-[#63C5D2] transition-all">
            Get started
          </button>
          {/* <button className='bg-[#63C5D2] text-[color:var(--text-color)] px-3 py-2 rounded-[5px]' >Get started</button> */}
        </div>
        <div className="w-1/2  pr-[7%]">
          <div className="hero-box2 w-full">
            <img src={doctor} alt="" srcset="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
