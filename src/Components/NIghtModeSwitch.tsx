import {useRef, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode"

export default function NightModeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const switchModeRef = useRef<HTMLDivElement>(null);
    const switContainerRef = useRef<HTMLDivElement>(null)
    const handleToggle = () => {
        const switchClassList = switchModeRef.current?.classList;
        const containerClassList = switContainerRef.current?.classList;
        if(containerClassList?.contains(".change-bg-white")){
            containerClassList?.remove("change-bg-white");
            containerClassList?.add("change-bg-dark");
        }
        else{
            containerClassList?.remove("change-bg-dark");
            containerClassList?.add("change-bg-white");
        }
        if(switchClassList?.contains("animate-move-right")){
            switchClassList?.remove("animate-move-right");
            switchClassList?.add("animate-move-left");
        }
        else{
            switchClassList?.remove("animate-move-left");
            switchClassList?.add("animate-move-right");
        }
    }
  return (
    <div  ref={switContainerRef} className="bg-[rgba(129,129,129,0.27)] border-2 border-sky-400 w-[70px] rounded-full p-1 flex" onClick={()=>handleToggle()}>
        <div ref={switchModeRef} className="rounded-[50%] h-[24px] w-[36px]">
        <DarkModeSwitch onChange={()=>setIsDarkMode(!isDarkMode)} checked={isDarkMode} size={26} sunColor="yellow" moonColor="#333"/>
        </div>
       
         
    </div>
  )
}
