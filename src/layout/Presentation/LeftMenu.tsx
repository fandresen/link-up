import { FaThLarge } from "react-icons/fa";
import ProfilPic from "../../Components/ProfilPic";
import { CgProfile } from "react-icons/cg";
import NightModeSwitch from "../../Components/NIghtModeSwitch";
export default function LeftMenu() {
  return (
    <div className="fixed top-0 left-0 w-[320px] 2xl:w-[376px] h-full bg-[#f9fcff] flex flex-col items-center">
      <h1 className="mt-[8px] text-[40px] font-semibold text-[#FE6847]">
        <span className="text-[#2176AE]">Link</span>Up
      </h1>
      <div className="mt-[24px] 2xl:mt-[40px]">
        <ProfilPic
          classsName="bg-[#FE6847] p-5 rounded-[50%] w-24 h-24 2xl:w-32 2xl:h-32"
          textStyle="text-[30px] 2xl:text-[40px]"
        />
      </div>
      <h1 className="text-[20px] font-medium text-gray-700 mt-[8px]">
        Lorem Ipsum
      </h1>
      <h1 className="text-[12px] 2xl:text-[13px] text-gray-500">
        loremipsum@gmail.com
      </h1>

      <div className="mt-[32px]">
        <button className="flex gap-[32px] py-3 px-[64px] hover:bg-sky-50 rounded-xl mt-[8px] text-[15px] 2xl:text-[18px]">
          <FaThLarge className="w-[24px] h-[24px] text-[#2176AE]" />
          My Post
        </button>
        <button className="flex gap-[32px] py-3 px-[64px] hover:bg-sky-50 rounded-xl mt-[8px] text-[15px] 2xl:text-[18px] items-center">
          <CgProfile className="w-[32px] h-[32px] text-[#2176AE]" />
          Profile
        </button>
        <div className="w-full ml-[64px] mt-[8pxpx]">
        <NightModeSwitch />
        </div>
       

        <button className="flex gap-1"></button>
      </div>
    </div>
  );
}
