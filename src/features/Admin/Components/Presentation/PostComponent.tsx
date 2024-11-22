import { PostT } from "@/interfaces";

interface propsT {
  data: PostT;
  handleValider:(id:number)=>void;
  handleRefuser:(id:number)=>void;
}
export default function PostComponent({ data,handleRefuser,handleValider }: propsT) {
  return (
    <div className="">
      <h1 className="text-gray-400 text-[12px]">{data.date}</h1>
      <div className="flex">
        <h1 className="text-sky-700 text-[20px]">{data.author.name}</h1>
        <h1 className="text-gray-500 text-[16px]">{data.title}</h1>
        <div className="flex">
          <button onClick={()=>handleValider(data.id)} className="text-white bg-green-400 p-[8px] w-[64px]">Valider</button>
          <button onClick={()=>handleRefuser(data.id)} className="text-white bg-red-500 p-[8px] w-[64px]">Refuser</button>
        </div>
      </div>
    </div>
  );
}
