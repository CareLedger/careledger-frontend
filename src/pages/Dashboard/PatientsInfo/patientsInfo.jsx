import React, { useEffect } from "react";
import girl from "../../../assets/girl1.jpg";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const PatientsInfo = () => {

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="flex-grow py-[20px] px-[30px]">
      <h1 className="text-[25px] text-white mt-[5px]">Patients Profile</h1>

      <div className="w-full flex justify-between mt-[40px]">
        <div className="w-[35%]">
          <div className="w-full rounded-[15px] bg-gray-800 pb-[20px]">
            <div className="h-[180px] relative bg-[#00b4b6] rounded-tr-[15px] rounded-tl-[15px] flex-col flex justify-center items-center">
              <h2 className="text-[20px] text-white font-bold pb-[60px]">Eliana Smith</h2>

              <img
                src={girl}
                alt=""
                className="h-[120px] w-[120px] border absolute bottom-[-50px] border-[#fff] rounded-[100px]"
              />
            </div>

            <div className="p-[20px]">
              <div className="flex gap-x-[20px] mt-[50px] cursor-pointer justify-center  ">
                <BsFacebook color="white" /> <BsTwitter color="white" />{" "}
                <BsInstagram color="white" />
              </div>
            </div>

            <div className="w-full px-[20px]">
              <div className="flex justify-center flex-col py-[11px] items-center border-t-[#ffffff40] border border-x-0 border-b-0">
                <h4 className="font-[600] text-[16px] text-[#fff]">
                  Occupation
                </h4>
                <h4 className="text-[14px] text-[#ffffff70]">UI UX Design</h4>
              </div>

              <div className="flex justify-center flex-col py-[11px] items-center border-t-[#ffffff40] border border-x-0 border-b-0">
                <h4 className="font-[600] text-[16px] text-[#fff]">Email ID</h4>
                <h4 className="text-[14px] text-[#ffffff70]">
                  will.smith@info.com
                </h4>
              </div>

              <div className="flex justify-center flex-col py-[11px] items-center border-t-[#ffffff40] border border-x-0 border-b-0">
                <h4 className="font-[600] text-[16px] text-[#fff]">Phone</h4>
                <h4 className="text-[14px] text-[#ffffff70]">+123 456 789</h4>
              </div>

              <div className="flex justify-center flex-col py-[11px] items-center border-t-[#ffffff40] border border-x-0 border-b-0">
                <h4 className="font-[600] text-[16px] text-[#fff]">Address</h4>
                <h4 className="text-[14px] text-[#ffffff70]">
                  85 Bay Drive, New Port Richey, FL 34653
                </h4>
              </div>
            </div>
          </div>

          <div className="w-full rounded-[15px] bg-gray-800 mt-[40px] p-[20px] ">
            <h2 className="text-[20px] text-white pb-[20px]">General Report</h2>

            <div className="mt-[15px]">
              <div className="w-full">
                <h3 className="text-[17px] font-[400] text-white">
                  Blood Pressure
                </h3>

                <div className="w-full h-[30px] relative mt-[8px] bg-slate-300 ">
                  <div className="h-[30px] w-[70%] bg-green-500 "></div>
                </div>
              </div>
            </div>

            <div className="mt-[10px]">
              <div className="w-full">
                <h3 className="text-[17px] font-[400] text-white">
                  Heart Beat
                </h3>

                <div className="w-full h-[30px] relative mt-[8px] bg-slate-300 ">
                  <div className="h-[30px] w-[40%] bg-blue-500 "></div>
                </div>
              </div>
            </div>

            <div className="mt-[10px]">
              <div className="w-full">
                <h3 className="text-[17px] font-[400] text-white">Sugar</h3>

                <div className="w-full h-[30px] relative mt-[8px] bg-slate-300 ">
                  <div className="h-[30px] w-[80%] bg-red-500 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[62%] bg-gray-800 rounded-[15px] p-[20px] ">
          <div className="w-full border-b-[bg-green-500] border border-x-0 border-t-0">
            <p className="px-[15px] w-[100px] text-[#00b4b6] font-bold text-center pb-[5px] border-b-[#00b4b6] border border-x-0 border-t-0 ">
              Activity
            </p>
          </div>

          <div className="w-full relative">
            <div className="absolute w-[1px] left-[10px] top-[10px] bg-[#ffffff60] h-full" />
            <div className="py-[20px]">
              <div className="flex">
                <div className="w-[20px] h-[20px] rounded-[50px] justify-center items-center flex bg-[#00b4b6]">
                  <div className="w-[12px] h-[12px] rounded-[50px] bg-white"></div>
                </div>
                <p className="ml-[20px] text-white text-[15px] ">02 Jun 2018</p>
              </div>

              <div className="ml-[40px]">
                <p className="text-[18px] font-semibold text-white my-[8px] ">
                  Spinal Osteomyelitis Surgery
                </p>

                <p className="text-[#ffffff90] text-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="py-[20px]">
              <div className="flex">
                <div className="w-[20px] h-[20px] rounded-[50px] justify-center items-center flex bg-[#00b4b6]">
                  <div className="w-[12px] h-[12px] rounded-[50px] bg-white"></div>
                </div>
                <p className="ml-[20px] text-white text-[15px] ">02 Jun 2018</p>
              </div>

              <div className="ml-[40px]">
                <p className="text-[18px] font-semibold text-white my-[8px] ">
                  Spinal Osteomyelitis Surgery
                </p>

                <p className="text-[#ffffff90] text-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="py-[20px]">
              <div className="flex">
                <div className="w-[20px] h-[20px] rounded-[50px] justify-center items-center flex bg-[#00b4b6]">
                  <div className="w-[12px] h-[12px] rounded-[50px] bg-white"></div>
                </div>
                <p className="ml-[20px] text-white text-[15px] ">02 Jun 2018</p>
              </div>

              <div className="ml-[40px]">
                <p className="text-[18px] font-semibold text-white my-[8px] ">
                  Spinal Osteomyelitis Surgery
                </p>

                <p className="text-[#ffffff90] text-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsInfo;
