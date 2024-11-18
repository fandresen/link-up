
interface propsT{
    classsName? : string;
    textStyle? :string;
}
export default function ProfilPic({classsName = "w-10 h-10",textStyle}:propsT) {
  return (
    <div className={`bg-[7aadce] ${classsName} flex justify-center items-center`}>
        <h1 className={`font-semibold text-white ${textStyle}`}>F</h1>
    </div>
  )
}
