import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../application/auth/getAuthProviders";
import { useLogoutUser } from "../../application/user/logoutUser";

const BaseLayout = () => {
  const authContext = useAuthContext();
  const { logoutUser } = useLogoutUser();

  return (
    <div className="bg-slate-800 w-full h-screen text-white p-2">
      {!!authContext.user && (
        <button
          onClick={logoutUser}
          className="bg-white text-black px-2 py-1 rounded-sm"
        >
          Logout
        </button>
      )}
      <Outlet />
    </div>
  );
};

export default BaseLayout;
