import axios from "axios";
import { useAuth } from "../../adaptors/auth/authAdaptor";
import { User } from "../../domain/User";
import { useNavigate } from "react-router-dom";
import { useSetAuthContext } from "../auth/getAuthProviders";

// TODO: make a file for axios and use the exported instance (should be in adaptors layer)
const _axios = axios.create({
  baseURL: "http://localhost:1337/api",
});

export function useLoginUser() {
  const navigate = useNavigate();
  const setAuthContext = useSetAuthContext();

  const authService = useAuth({
    asyncFn: async (username, password) => {
      const res = await _axios.post<User>("/auth/local", {
        identifier: username,
        password,
      });

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
