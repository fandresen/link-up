import { PostT } from "../../../../interfaces";
import { useAxiosWithToken } from "../../../../lib/AxiosConfig";
import { useEffect, useState } from "react";
import PostComponent from "../Presentation/PostComponent";

export default function ListPostContainer() {
  const [postList, setPostList] = useState<PostT[]>([]);
  const axios = useAxiosWithToken();

  const fetchData = async () => {
    try {
      const res = (await axios.get<PostT[]>("/post/post-attente")).data;
      setPostList(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleValider = async (id:number)=>{
    setPostList(postList.filter((post:PostT) => post.id !== id));
    try {
      await axios.post(`/post/valider-post/id?=${id}`);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }

  const handleRefuser = async (id:number)=>{
    setPostList(postList.filter((post:PostT) => post.id!== id));
    try {
      await axios.post(`/post/refuser-post/${id}`);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-[32px] py-[16px] w-[65vw] 2xl:w-[70vw] bg-slate-50 mt-[8px] ml-[5vw] h-[45vh] relative">
      <h3 className="text-[13px] text-gray-400">Gestion des Posts</h3>
      <h1 className="text-[20px] text-[#2176AE] font-medium">Post en attente de validaton</h1>

      {postList.length === 0 ? (
        <div className="text-center absolute top-[10vh] w-full">Aucun post en attente de validation</div>
      ) : (
        postList.map((post) => <PostComponent data={post} key={post.id} handleValider={handleValider} handleRefuser={handleRefuser}/>)
      )}
    </div>
  );
}
