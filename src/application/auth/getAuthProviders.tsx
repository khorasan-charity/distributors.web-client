import { FC, PropsWithChildren, useContext, useState } from "react";
import {
  AuthContext,
  IAuthContext,
  SetAuthContext,
} from "../context/auth/authContext";
import { useLocalStorage } from "../../adaptors/storage/localStorageAdaptor";

export function getAuthProviders() {
  const AuthProviders: FC<PropsWithChildren<{}>> = ({ children }) => {
    const storageService = useLocalStorage(); // Dependency injection
    const [context, setContext] = useState<IAuthContext>({
      user: storageService.getObject("user", null),
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
