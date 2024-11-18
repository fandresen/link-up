import {useRef, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode"

export default function NightModeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const switchModeRef = useRef<HTMLDivElement>(null);
    const handleToggle = () => {
        const classList = switchModeRef.current?.classList;
        if(classList?.contains("animate-move-right")){
            classList?.remove("animate-move-right");
            classList?.add("animate-move-left");
        }
        else{
            classList?.remove("animate-move-left");
            classList?.add("animate-move-right");
        }
    }
  return (
    <div   className="bg-[rgba(129,129,129,0.27)] border-2 border-sky-400 w-[70px] rounded-full p-1 flex" onClick={()=>handleToggle()}>
        <div ref={switchModeRef} className="rounded-[50%] h-[24px] w-[36px]">
        <DarkModeSwitch onChange={()=>setIsDarkMode(!isDarkMode)} checked={isDarkMode} size={26} sunColor="yellow" moonColor="#333"/>
        </div>
       
         
    </div>
  )
}
