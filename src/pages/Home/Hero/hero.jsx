import React from "react";
import Navbar from "../../../component/Navbar/navbar";
import doctor from "../../../assets/c.svg";

const Hero = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full max-w-[90%] mt-[40px] m-auto flex justify-center items-center">
        <div className="w-1/2 flex flex-col ">
          <h1 className="text-[color:var(--text-color)] text-[50px] w-[80%]  leading-[1.2] font-bold  ">
            Take your <span className="bg-gradient-to-r from-[#63C5D2] to-[#FF91A4] text-transparent bg-clip-text">Clinical</span>  Trials to the next level
          </h1>
          <p className="text-[color:var(--text-color)] w-[80%] mt-[20px] leading-[25px]">
            Careledger is a blockchain medical online platform designed to
            manage patient's information efficiently.{" "}
          </p>
          <button className='border mt-10 border-[#63C5D2] w-full max-w-[30%] text-[color:var(--text-color)] px-3 py-2 rounded-[5px] hover:bg-[#63C5D2] transition-all' >Get started</button>
          {/* <button className='bg-[#63C5D2] text-[color:var(--text-color)] px-3 py-2 rounded-[5px]' >Get started</button> */}

        </div>
        <div className="w-1/2">
          <img src={doctor} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
