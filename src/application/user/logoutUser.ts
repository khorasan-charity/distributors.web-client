import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../adaptors/storage/localStorageAdaptor";
import { useSetAuthContext } from "../auth/getAuthProviders";

export function useLogoutUser() {
  const storageService = useLocalStorage(); // Dependency injection
  const setAuthContext = useSetAuthContext(); // Dependency injection
  const navigate = useNavigate(); // Dependency injection

  const logoutUser = () => {
    storageService.removeKey("user");
    setAuthContext({ user: null });
    navigate("/login", { replace: true });
  };

  return {
    logoutUser,
  };
}
