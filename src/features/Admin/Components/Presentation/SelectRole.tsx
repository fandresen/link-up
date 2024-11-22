import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../../../shadCNComponents/ui/select";

interface propsT{
    selected:(seleced:string)=>void;
}

export default function SelectRole({selected}:propsT) {
    const handleSelect = (value:string)=>{
        console.log(value); 
        selected(value);
    }
  return (
    <div>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-[112px]">
          <SelectValue placeholder="Membre" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="membre">Membre</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
