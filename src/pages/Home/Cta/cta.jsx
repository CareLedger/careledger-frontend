import React from "react";
import Ctaimg from "../../../assets/cta.svg";

const Cta = () => {
  return (
    <div className="w-full pb-[120px]">
      <div className="w-full max-w-[85%] m-auto">
        <div className="w-full bg-[#63C5D260] items-center flex">
          <div className="w-[50%] p-[5%]">
            <div className="w-[420px]">
              <p className="text-white text-[20px] font-semibold line ">Own your record</p>
              <h3 className="text-[40px] leading-[45px] font-bold my-[15px] text-white">
                Ready to try to grow your business?
              </h3>

              <p className="text-white text-[20px]">
                Get the best working experience that you never feel before
              </p>

              <button className="border mt-[30px] border-[#63C5D2] bg-[#63C5D2] w-full text-[color:var(--text-color)] px-3 py-[11px] rounded-[50px] hover:bg-[#63C5D2] transition-all">
                Get started
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={Ctaimg} alt="" />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Cta;
