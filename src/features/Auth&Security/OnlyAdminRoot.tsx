import { useEffect } from "react";
import { useKeycloak } from "../../context/KeycloackContext";
import { Outlet, useNavigate } from "react-router-dom";

// interface propsT{
//     children:ReactNode;
// }
export default function OnlyAdminRoot() {
    const {kc} = useKeycloak();
    const navigate = useNavigate();
   
    useEffect(() => {
        if (kc?.hasRealmRole("role-admin")) {
            console.log("HAS ROLE ADMIN");
        } else if (kc?.authenticated) {
            navigate("/home");
        } else {
            navigate("/public");
        }
    }, [kc, navigate]); 
    
    // Render the Outlet if the user has the 'role-admin' role
    return kc?.hasRealmRole("role-admin") ? <Outlet /> : null;
}
