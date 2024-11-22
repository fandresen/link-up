import { Route, Routes } from "react-router-dom";
import LeftMenu from "./layout/Presentation/LeftMenu";
import AdminDashboard from "./pages/AdminDashboard";
import HomeUser from "./pages/HomeUser";
import RequireAuth from "./features/Auth&Security/RequireAuth";
import OnlyAdminRoot from "./features/Auth&Security/OnlyAdminRoot";
import PublicPage from "./pages/PublicPage";
import Loading from "./Components/Loading";
import { useKeycloak } from "./context/KeycloackContext";

function App() {
  const {authenticated,error,initialized}=useKeycloak();

  if (error) {
    return <div>Erreur : {error}</div>;
  }
  if (!initialized) {
    return <Loading />;
  }
  return (
    <>

      <Routes>
        <Route path="" element={<RequireAuth />}>
          <Route path="" element={<LeftMenu />}>
            <Route path="/home" element={<HomeUser />} />
            <Route path="/admin" element={<OnlyAdminRoot />}>
              <Route path="" element={<AdminDashboard />} />
            </Route>
          </Route>
        </Route>
        <Route path="/public" element={<PublicPage />} />
        <Route path="*" element={<h1 className="text-5xl w-full text-center">404 nof found</h1>}/>
      </Routes>
     
    </>
  );
}

export default App;
