import axios from "axios";
import { useAuth } from "../../adaptors/auth/authAdaptor";
import { User } from "../../domain/User";

// TODO: make a file for axios and use the exported instance
const _axios = axios.create({
  baseURL: "http://localhost:1337/api",
});

export function useLoginUser() {
  const authService = useAuth({
    asyncFn: async (username, password) => {
      const res = await _axios.post<User>("/auth/local", {
        identifier: "admin@example.com",
        password: "adminadmin",
      });

      return res.data;
    },
  });

  const loginUser = async (
    username: string,
    password: string,
  ): Promise<User> => {
    const user = await authService.login(username, password);

    if (user) {
      console.log({ user });
      return user;
    } else {
      // TODO: error handler with notification
      return Promise.reject();
    }
  };

  return {
    loginUser,
  };
}
