import React from "react";
import aboutUs from "../../../assets/b.svg";
import Lines from "../../../assets/lines.svg";
import { RiRestartFill } from "react-icons/ri";

function Aboutus() {
  return (
    <>
      <img src={Lines} alt="" className="w-full absolute z-0" />
      <div className="w-full pb-[120px]">
        <div className="w-full max-w-[85%] m-auto flex flex-col items-center justify-center py-[60px]">
          <p className="text-[#63C5D2] font-semibold">How it works</p>
          <h1 className="font-bold text-[30px] my-[5px] text-white">
            what We Offer
          </h1>
          <p className="text-[14px] text-white w-[400px] text-center font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum  .
          </p>

          <div className="flex w-full items-center gap-x-[100px] mt-[50px]">
            <div className="w-[50%]">
              <h1 className="text-[#63C5D2] text-[45px] italic">
                The secured platform to get your health record stored and
                accessed
              </h1>
            </div>

            <div className="w-[50%]">
              {[...Array(4)].map((_, i) => {
                return (
                  <div className="flex w-full mt-[25px]">
                    <div className="h-[40px] w-[40px] bg-[#63C5D260] rounded-[50px] flex items-center justify-center">
                      {" "}
                      <RiRestartFill color="#63C5D2" size={30} />
                    </div>

                    <div className="ml-[20px]">
                      <h3 className="font-semibold text-[22px] text-white ">
                        Sign Up To Get Started
                      </h3>
                      <p className="mt-[8px] text-[14px] w-[400px] text-white font-[300]">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit .
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
