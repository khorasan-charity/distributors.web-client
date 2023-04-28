import { Outlet } from "react-router-dom";
import { useAuthContext } from "../../application/auth/getAuthProviders";

const BaseLayout = () => {
  const authContext = useAuthContext();

  return (
    <div>
      <Outlet />
      <pre>{JSON.stringify(authContext, null, 2)}</pre>
    </div>
  );
};

export default BaseLayout;
