import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";

interface propsT{
  url?:string;
  className?:string;
  lastName:string;
  classNameProfil:string;
  imageClassName?:string;
}
export default function ProfilAvatar({url,className,lastName,classNameProfil,imageClassName}:propsT) {
  const [imageError,setImagError]=useState<boolean>(false);

    const name = lastName?.charAt(0).toUpperCase();

  return (
    <>
        <div className={className}>
            <Avatar>
               
                <div className={`bg-red-400 text-center p-2 rounded-full flex justify-center items-center ${classNameProfil}`}>
                  {
                    imageError?(
                      <AvatarFallback className="text-white font-semibold ">{name}</AvatarFallback>
                    ):(
                      <AvatarImage src={url} className={`rounded-[50%] object-cover ${imageClassName}`} onError={()=>setImagError(true)} onLoad={()=>setImagError(false)}/>
                    )

                  }
               
                </div>
                
            </Avatar>
        </div>
    </>
  );
}
