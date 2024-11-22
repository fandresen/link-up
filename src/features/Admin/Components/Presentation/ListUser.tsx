import { UserT } from "@/interfaces";
import SelectRole from "./SelectRole";

interface PropsT {
  data: UserT[];
  onRoleSelect: (userId: number, role: string) => void;
  onToggleStatus: (userId: number) => void; 
}

export default function ListUser({ data, onRoleSelect, onToggleStatus }: PropsT) {
  return (
    <div className="px-[32px] py-[16px] w-[65vw] 2xl:w-[70vw] bg-slate-50 ml-[5vw] h-[45vh]">
      <h3 className="text-[13px] text-gray-400">Gestion des membres</h3>
      <h1 className="text-[20px] text-[#2176AE] font-medium">Membres</h1>

      <div className="mt-[32px] h-[30vh] overflow-y-scroll relative">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="text-[15px]">Nom</th>
              <th className="text-[15px]">Email</th>
              <th className="text-[15px]">Statut</th>
              <th className="text-[15px]">Rôle</th>
              <th className="text-[15px]">Action</th>
            </tr>
          </thead>
          {data.length === 0 ? (
            <div className="text-center absolute top-[10vh] w-full">
              Aucun utilisateur
            </div>
          ) : (
            <tbody>
              {data.map((user) => (
                <tr key={user.id} className="border-b border-gray-200">
                  {/* Nom */}
                  <td className="py-[8px] text-[14px] 2xl:text-[16px]">{user.name}</td>

                  {/* Email */}
                  <td className="py-[8px] text-[14px] 2xl:text-[16px]">{user.email}</td>

                  {/* Statut */}
                  <td className="py-[8px] text-[14px] 2xl:text-[16px]">
                    {user.status ? "ACTIVE" : "DESACTIVE"}
                  </td>

                  {/* Sélection du rôle */}
                  <td className="py-[8px] text-[14px] 2xl:text-[16px]">
                    <SelectRole
                      selected={(role: string) => onRoleSelect(user.id, role)} 
                    />
                  </td>

                 
                  <td className="py-[8px] text-[14px] 2xl:text-[16px]">
                    <button
                      onClick={() => onToggleStatus(user.id)} 
                      className={`px-[16px] py-[10px] w-[96px] 2xl:w-[112px] text-[12px] 2xl:text-[14px] text-white font-medium rounded-lg 2xl:rounded-lg ${
                        user.status ? "bg-red-500 hover:bg-red-600" : "bg-sky-500 hover:bg-sky-600"
                      }`}
                    >
                      {user.status ? "Désactiver" : "Activer"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
