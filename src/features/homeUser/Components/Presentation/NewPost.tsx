import { Button } from "../../../../shadCNComponents/ui/button";
import ProfilAvatar from "../../../../Components/ProfilAvatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../shadCNComponents/ui/dialog";
import { useState } from "react";

interface propsT{
  handleNewPostSubmit:({title,description}:{title:string,description:string})=>void;
}
export default function NewPost({handleNewPostSubmit}:propsT) {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [open, setOpen] = useState(false); 


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleNewPostSubmit({title:formData.title,description:formData.description});
    setOpen(false); 
  };

  return (
    <div className="bg-gray-50 flex justify-center gap-10 mt-20 py-[10px] 2xl:py-[16px] w-[50vw] 2xl:w-[50vw] ml-[11.5vw] rounded-2xl">
      <ProfilAvatar
        classNameProfil=" w-14 2xl:w-16 h-14 2xl:h-16"
        lastName="fandresena"
        className="w-10 h-10"
        url=""
        imageClassName="w-10 h-10"
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-transparent hover:bg-transparent">
            <button className="bg-gray-50 w-[30vw] 2xl:w-[30vw] px-[24px] py-[13px] 2xl:py-[16px] text-left text-gray-400 shadow-lg rounded-full mt-1">
              Des nouvelles idées de publication?
            </button>
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[50vw]">
          <DialogHeader>
            <DialogTitle>Nouvelle Publication</DialogTitle>
            <DialogDescription>
              Partagez une idée ou une annonce avec tout le monde !
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Titre de la publication
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Entrez un titre..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Écrivez votre description ici..."
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Publier
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
