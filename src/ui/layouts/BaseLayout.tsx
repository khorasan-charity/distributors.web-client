import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../application/auth/getAuthProviders";

const BaseLayout = () => {
  const authContext = useAuthContext();

  return (
    <div className="bg-slate-800 w-full h-screen text-white">
      <Outlet />
    </div>
  );
};

export default BaseLayout;
