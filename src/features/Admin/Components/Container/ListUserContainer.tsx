import { UserT } from "@/interfaces";
import { useAxiosWithToken } from "../../../../lib/AxiosConfig";
import { useEffect, useState } from "react";
import ListUser from "../Presentation/ListUser";

export default function ListUserContainer() {
  const [userList, setUserList] = useState<UserT[]>([]);
  const axios = useAxiosWithToken();

  const fetchData = async () => {
    try {
      const res = (await axios.get<UserT[]>("/post/user-all")).data;
      setUserList(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRoleSelect = async (userId: number, role: string) => {
    console.log(`Rôle sélectionné pour l'utilisateur ${userId}: ${role}`);
    try {
      await axios.post(`/change-role/${userId}`, { role: role });
    } catch (e) {
      console.log(e);
    }
  };

  const handleToggleStatus = async (userId: number) => {
    console.log(`Activer/Désactiver utilisateur ${userId}`);
    try {
      await axios.post(`toggle-activate/${userId}`);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[80vw] mt-[32px]">
      <ListUser
        data={userList}
        onRoleSelect={handleRoleSelect}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}
