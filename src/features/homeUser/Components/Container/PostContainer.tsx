import { PostT } from "@/interfaces";
import { useEffect, useState } from "react";
import PostCard from "../Presentation/PostCard";
import { useAxiosWithToken } from "../../../../lib/AxiosConfig";

export default function PostContainer() {
  const [data, setData] = useState<PostT[]>([]);
  const axios = useAxiosWithToken();

  const fetchData = async () => {
    try {
      const res = (await axios.get<PostT[]>("/post/article-all")).data;
      setData(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-[24px] 2xl:mt-[24px] ml-[7vw] 2xl:ml-[7vw]">
        {data.map((data) => (
          <PostCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}
