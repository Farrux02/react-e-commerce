import { FaTruckFast } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import { PiHeadphones } from "react-icons/pi";

const PrivelegesSection = () => {
  return (
    <section className="my-[140px] max-w-[943px] w-full grid grid-cols-3 justify-between mx-auto">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full flex justify-center items-center bg-[#2F2E30] bg-opacity-30 mx-auto">
          <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
            <FaTruckFast
              className="w-10 h-10"
              stroke="white"
              strokeWidth="30px"
              fill="black"
            />
          </div>
        </div>
        <p className="text-[20px] font-semibold mt-6">FREE AND FAST DELIVERY</p>
        <p className="mt-2 text-[14px] font-normal">
          Free delivery for all orders over $140
        </p>
      </div>
      <div className="text-center">
        <div className="w-20 h-20 rounded-full flex justify-center items-center bg-[#2F2E30] bg-opacity-30 mx-auto">
          <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
            <PiHeadphones className="w-10 h-10 text-white" />
          </div>
        </div>
        <p className="text-[20px] font-semibold mt-6">24/7 CUSTOMER SERVICE</p>
        <p className="mt-2 text-[14px] font-normal">
          Friendly 24/7 customer support
        </p>
      </div>
      <div className="text-center">
        <div className="w-20 h-20 rounded-full flex justify-center items-center bg-[#2F2E30] bg-opacity-30 mx-auto">
          <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
            <LuShieldCheck className="w-10 h-10 text-white" />
          </div>
        </div>
        <p className="text-[20px] font-semibold mt-6">MONEY BACK GUARANTEE</p>
        <p className="mt-2 text-[14px] font-normal">
          We reurn money within 30 days
        </p>
      </div>
    </section>
  );
};

export default PrivelegesSection;
