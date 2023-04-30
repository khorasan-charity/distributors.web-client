import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../application/auth/getAuthProviders";
import LogoutButton from "../components/LogoutButton";

const BaseLayout = () => {
  const authContext = useAuthContext();

  return (
    <div className="bg-slate-800 w-full h-screen text-white p-2">
      {!!authContext.user && <LogoutButton />}
      <Outlet />
    </div>
  );
};

export default BaseLayout;
