import axios from "axios";
import { useAuth } from "../../adaptors/auth/authAdaptor";
import { User } from "../../domain/User";
import { useNavigate } from "react-router-dom";
import { useSetAuthContext } from "../auth/getAuthProviders";
import { useNotification } from "../../adaptors/notification/notificationAdaptor";
import { useLocalStorage } from "../../adaptors/storage/localStorageAdaptor";

// TODO: make a file for axios and use the exported instance (should be in adaptors layer)
const _axios = axios.create({
  baseURL: "http://localhost:1337/api",
});

export function useLoginUser() {
  const navigate = useNavigate(); // Dependency injection
  const setAuthContext = useSetAuthContext(); // Dependency injection
  const notificationService = useNotification(); // Dependency injection
  const storageService = useLocalStorage(); // Dependency injection

  const authService = useAuth({
    asyncFn: async (username, password) => {
      const res = await _axios.post<User>("/auth/local", {
        identifier: username,
        password,
      });

      if (res.status === 200) {
        storageService.setObject("user", res.data);
        notificationService.success("Hooray!!!");
      }

      return res.data;
    },
  });

  const loginUser = async (
    username: string,
    password: string,
  ): Promise<void> => {
    const user = await authService.login(username, password);
    if (user) {
      setAuthContext({
        user,
      });

      // TODO: this is not a good way for handling async set state
      setTimeout(() => {
        navigate("/", {
          replace: true,
        });
      }, 0);
    } else {
      // TODO: error handler with notification
      return Promise.reject();
    }
  };

  return {
    loginUser,
  };
}
