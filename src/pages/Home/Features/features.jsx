import React from "react";
import uploadImage from "../../../assets/upload.png";
import controlacces from "../../../assets/smart-lock.png";
import wallet from "../../../assets/wallet.png";

function Features() {
  return (
    <div className="w-full">
      <div className=" w-full max-w-[90%] m-auto flex flex-col items-center justify-center py-[40px] ">
        <h1 className="font-bold text-[30px] text-white">Our Features</h1>
        <div className="flex justify-between text-white gap-x-8 py-7">
            
          <div className="flex flex-col items-center justify-center px-5 py-7 gap-y-3 rounded-[7px] hover:bg-slate-700">
            <img src={uploadImage} className="w-[10%]" alt="" srcset="" />
            <h1 className="text-[18px] font-bold">Upload/Update</h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Leo integer ut vel ut
              rhoncus purus. Vel erat et vitae enim nulla in. Quis non at donec
              pellentesque malesuada nunc
            </p>
          </div>

          <div className="flex flex-col items-center justify-center px-5 py-7 gap-y-3  rounded-[7px] hover:bg-slate-700">
            <img src={controlacces} className="w-[10%]" alt="" srcset="" />
            <h1 className="text-[18px] font-bold">Controlled Access</h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Leo integer ut vel ut
              rhoncus purus. Vel erat et vitae enim nulla in. Quis non at donec
              pellentesque malesuada nunc
            </p>
          </div>

          <div className="flex flex-col items-center justify-center px-5 py-7 gap-y-3 rounded-[7px] hover:bg-slate-700">
            <img src={wallet} className="w-[10%]" alt="" srcset="" />
            <h1 className="text-[18px] font-bold">Celo Wallet</h1>
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Leo integer ut vel ut
              rhoncus purus. Vel erat et vitae enim nulla in. Quis non at donec
              pellentesque malesuada nunc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
