import { FC, PropsWithChildren } from "react";
import { useAuthContext } from "../../../application/auth/getAuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<PropsWithChildren<{}>> = ({ children }) => {
  const authContext = useAuthContext();

  if (!authContext.user) return <Navigate to={"/login"} replace />;

  return <>{children}</>;
};

export default PrivateRoute;
