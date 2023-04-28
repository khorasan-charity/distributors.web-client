import { FC, PropsWithChildren, useContext, useState } from "react";
import {
  AuthContext,
  IAuthContext,
  SetAuthContext,
} from "../../adaptors/auth/authContext";

export function getAuthProviders() {
  const AuthProviders: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [context, setContext] = useState<IAuthContext>({
      user: null,
    });

    return (
      <SetAuthContext.Provider value={setContext}>
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
      </SetAuthContext.Provider>
    );
  };

  return AuthProviders;
}

export function useAuthContext() {
  return useContext<IAuthContext>(AuthContext);
}

export function useSetAuthContext() {
  return useContext(SetAuthContext);
}
