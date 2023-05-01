import React from "react";
import uploadImage from "../../../assets/upload.png";
import controlacces from "../../../assets/smart-lock.png";
import wallet from "../../../assets/wallet.png";
import Lines from "../../../assets/lines.svg";

function Features() {
  return (
    <>
      <img src={Lines} alt="" className="w-full absolute z-0" />
      <div className="w-full mt-[30px] relative pb-[70px]">
        <div className=" w-full max-w-[85%] m-auto flex flex-col items-center justify-center py-[60px] ">
          <h1 className="font-bold text-[30px] text-white">Our Features</h1>
          <p className="text-[14px] text-white font-[300]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex  justify-between text-white gap-x-[3%] py-7 mt-[100px]">
            <div className="flex h-[300px] card-shadow flex-col items-center justify-center px-5 py-7 gap-y-3 rounded-[7px]">
              <img src={uploadImage} className="w-[20%]" alt="" srcset="" />
              <h1 className="text-[18px] my-[8px] font-bold">Upload/Update</h1>
              <p className="text-[14px] font-[300] text-center text-[#fff]">
                Lorem ipsum dolor sit amet consectetur. Leo integer ut vel ut
                rhoncus purus. Vel erat et vitae enim nulla in. Quis non at
                donec pellentesque malesuada nunc
              </p>
            </div>

            <div className="flex flex-col bg-[#121212] h-[300px] card-shadow items-center justify-center px-5 py-7 gap-y-3  rounded-[7px]">
              <img src={controlacces} className="w-[20%]" alt="" srcset="" />
              <h1 className="text-[18px] my-[8px] font-bold">
                Controlled Access
              </h1>
              <p className="text-[14px] font-[300] text-center text-[#fff]">
                Lorem ipsum dolor sit amet consectetur. Leo integer ut vel ut
                rhoncus purus. Vel erat et vitae enim nulla in. Quis non at
                donec pellentesque malesuada nunc
              </p>
            </div>

            <div className="flex flex-col bg-[#121212] h-[300px] card-shadow items-center justify-center px-5 py-7 gap-y-3 rounded-[7px]">
              <img src={wallet} className="w-[20%]" alt="" srcset="" />
              <h1 className="text-[18px] my-[8px] font-bold">Celo Wallet</h1>
              <p className="text-[14px] font-[300] text-center text-[#fff]">
                Lorem ipsum dolor sit amet consectetur. Leo integer ut vel ut
                rhoncus purus. Vel erat et vitae enim nulla in. Quis non at
                donec pellentesque malesuada nunc
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
