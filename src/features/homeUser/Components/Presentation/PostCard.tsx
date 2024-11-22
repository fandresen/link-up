import ProfilAvatar from "../../../../Components/ProfilAvatar";
import { PostT } from "../../../../interfaces";

interface propstT {
  data: PostT;
}
export default function PostCard({ data }: propstT) {
  return (
    <div className="w-[60vw] 2xl:w-[65vw] bg-[rgba(33,118,174,0.04)] px-[32px] py-[24px] rounded-xl mt-[24px]">
      <div className="flex gap-2">
        <ProfilAvatar
          className="w-10 h-10"
          classNameProfil="w-9 h-9"
          lastName={data.author.name}
          imageClassName="w-10 h-10"
          url={data.author.profilePic}
        />
        <div>
          <h1 className="text-[#2176AE] font-medium text-[18px]">{data.author.name}</h1>
          <h1 className="text-[#829daf] text-[12.5px] ">{data.date}</h1>
        </div>
      </div>
      <div>
        <h1 className="mt-[16px] font-medium text-[#336094]">{data.title}</h1>
        <p className="text-justify text-[16px] text-gray-600 mt-[24px]">
          {data.description}
        </p>
      </div>
      <div>
        <img src={""} alt="" />
      </div>
    </div>
  );
}
