import { IoSearch } from "react-icons/io5";

interface propsT{
    data : object;
    searchdata : (data : object) =>void;
}
export default function SearchBar() {
    const searchdata= (searchText:string) =>{
        // Logic to filter and update the data
    }
  return (
    <div className="fixed w-[38vw] rounded-full text-[16px] text-gray-500 py-2 bg-white border-2 border-[rgba(254,104,71,0.3)] top-[8px] left-[42.5vw] 2xl:left-[40vw]">
          <IoSearch className="w-7 h-7 text-[#2176aeb6] top-2 left-4 absolute"/>
        <input type="text" className="pl-[72px] ring-0" placeholder="Chercher une publication..." onChange={(e) => searchdata(e.target.value)} />
    </div>
  )
}
