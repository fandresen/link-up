import ProfilPic from "../../Components/ProfilAvatar";
import { CgProfile } from "react-icons/cg";
import NightModeSwitch from "../../Components/NIghtModeSwitch";
import { FiLogOut } from "react-icons/fi";
import ProfilAvatar from "../../Components/ProfilAvatar";
import { sarikoURL } from "../../lib/GlobalConst";
import { Outlet } from "react-router-dom";
import { HiOutlineViewGrid } from "react-icons/hi";
import OnlyAdminComponent from "../../features/Auth&Security/OnlyAdminComponent";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import useLeftMenu from "../hooks/useLeftMenu";
import { useKeycloak } from "../../context/KeycloackContext";

export default function LeftMenu() {
  const {
    handleLogoutClick,
    handleManageClick,
    handleMyPostClick,
    handleProfileClick,
    logoClick,
    userInfo
  } = useLeftMenu();
  const {kc} = useKeycloak();
  console.log(kc);
  return (
    <>
      <div className="flex">
        <div className="fixed top-0 left-0 w-[320px] 2xl:w-[376px] h-full bg-[#f9fcff] flex flex-col items-center">
          <h1 onClick={()=>logoClick()} className="mt-[8px] text-[40px] cursor-pointer font-semibold text-[#FE6847]">
            <span className="text-[#2176AE]">Link</span>Up
          </h1>
          <div className="mt-[24px] 2xl:mt-[40px]">
            <ProfilAvatar
              classNameProfil="w-32 h-32"
              lastName={sarikoURL}
              className=""
              imageClassName="w-32 h-32"
              url=""
            />
          </div>
          <h1 className="text-[20px] font-medium text-gray-700 mt-[8px]">
           {userInfo.name}
          </h1>
          <h1 className="text-[12px] 2xl:text-[13px] text-gray-500">
            {userInfo.email}
          </h1>

          <div className="mt-[32px]">
            <button onClick={()=>handleMyPostClick()} className="flex gap-[32px] py-3 px-[64px] hover:bg-sky-50 rounded-xl mt-[8px] text-[15px] 2xl:text-[18px]">
              <HiOutlineViewGrid className="w-[32px] h-[32px] text-[#2176AE]" />
              My Post
            </button>
            <button onClick={()=>handleProfileClick()} className="flex gap-[32px] py-3 px-[64px] hover:bg-sky-50 rounded-xl mt-[8px] text-[15px] 2xl:text-[18px] items-center">
              <CgProfile className="w-[32px] h-[32px] text-[#2176AE]" />
              Profile
            </button>
            <div>
              <OnlyAdminComponent>
                <button onClick={()=>handleManageClick()} className="flex gap-[32px] py-3 px-[64px] hover:bg-sky-50 rounded-xl mt-[8px] text-[15px] 2xl:text-[18px] items-center">
                  <TbLayoutDashboardFilled className="w-[32px] h-[32px] text-[#2176AE]" />
                  Manage
                </button>
              </OnlyAdminComponent>
            </div>

            <div className="w-full ml-[64px] mt-[8px]">
              <NightModeSwitch />
            </div>

            <button onClick={()=>handleLogoutClick()} className="flex gap-[32px] py-3 px-[64px] hover:bg-sky-50 rounded-xl mt-[8px] text-[15px] 2xl:text-[18px] items-center absolute bottom-[16px] 2xl:bottom-[32px]">
              <FiLogOut className="w-[32px] h-[32px] text-[#2176AE]" />
              Deconnexion
            </button>
          </div>
        </div>
        <div className="ml-[320px] 2xl:ml-[376px]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
