import { AuthApiService } from "../../application/ports";
import { User } from "../../domain/User";

export function useAuth({
  asyncFn,
}: {
  asyncFn: (username: string, password: string) => Promise<User>;
}): AuthApiService {
  return {
    login: async (username: string, password: string) => {
      return asyncFn(username, password);
    },
    logout: async () => {},
  };
}
