import { useEffect, useState } from "react";
import { useKeycloak } from "../../context/KeycloackContext";
import { useNavigate } from "react-router-dom"

export default function useLeftMenu() {
    const {kc,authenticated} = useKeycloak();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState<{ name?: string; email?: string }>({});

    useEffect(() => {
        if (kc && authenticated) {
          // Vérifier si les informations sont disponibles dans le token
          const tokenParsed = kc.tokenParsed;
          if (tokenParsed) {
            setUserInfo({
              name: tokenParsed?.name,
              email: tokenParsed?.email,
            });
          } else {
            // Si non, charger le profil utilisateur depuis Keycloak
            kc.loadUserProfile().then((profile) => {
              setUserInfo({
                name: profile.firstName + " " + profile.lastName,
                email: profile.email,
              });
            }).catch((error) => {
              console.error("Erreur lors du chargement du profil utilisateur:", error);
            });
          }
        }
      }, [kc, authenticated]);


    const handleMyPostClick = () =>{
        navigate("my-post");
    }

    const handleProfileClick = () =>{
         navigate("#");
        //TODO: implement keycloack profile modification
    }
    const handleLogoutClick = () =>{
        kc?.logout({redirectUri:"http://localhost:5173/public"});
    }
    const handleManageClick =()=>{
      
         navigate("/admin");
    }
    const logoClick =()=>{

         navigate("/home");
    }
  return {handleLogoutClick,handleManageClick,handleMyPostClick,handleProfileClick,logoClick,userInfo}
}
