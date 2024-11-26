// import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from """

import NewPost from "../Presentation/NewPost";
import SearchBar from "../Presentation/SearchBar";
import PostContainer from "./PostContainer";
import { useAxiosWithToken } from "../../../../lib/AxiosConfig";

export default function HomeUserContainer() {
  const axios = useAxiosWithToken();
  const handleNewPostSubmit = async ({title,description}:{title:string,description:string})=>{
    console.log({'title':title, 'description':description});
    try{
      const res = await axios.post("/post/new-post",{'title':title, 'description':description});
    }
    catch(e){
      console.log(e);  
    }
    
  }
  return (
    <>
      <SearchBar />
      <NewPost handleNewPostSubmit={handleNewPostSubmit}/>
      <PostContainer />
    </>
  );
}
