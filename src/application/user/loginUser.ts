import axios from "axios";
import { useAuth } from "../../adaptors/auth/authAdaptor";
import { User } from "../../domain/User";
import { useNavigate } from "react-router-dom";

// TODO: make a file for axios and use the exported instance
const _axios = axios.create({
  baseURL: "http://localhost:1337/api",
});

export function useLoginUser() {
  const navigate = useNavigate();

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
      navigate("/", {
        replace: true,
      });
    } else {
      // TODO: error handler with notification
      return Promise.reject();
    }
  };

  return {
    loginUser,
  };
}
