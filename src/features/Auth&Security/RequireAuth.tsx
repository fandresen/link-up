
import { useKeycloak } from '../../context/KeycloackContext';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

export default function RequireAuth() {
   const {kc}=useKeycloak()
    const authentified = kc?.authenticated;
  return authentified?(<Outlet/>):<Navigate to={"/public"}/>
  
}
