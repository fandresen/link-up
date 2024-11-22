import { useKeycloak } from "../../context/KeycloackContext";
import { ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface propsT{
    children:ReactNode;
}
export default function OnlyAdminComponent({children}:propsT) {
    const {kc} = useKeycloak();

    if (kc?.hasRealmRole('role-admin')) {
        return children;
    } else {
        return null;
   }
}
