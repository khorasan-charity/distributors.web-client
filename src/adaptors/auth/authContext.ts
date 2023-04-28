import { Dispatch, SetStateAction, createContext } from "react";
import { User } from "../../domain/User";

export interface IAuthContext {
  user: User | null;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
});

export const SetAuthContext = createContext<
  Dispatch<SetStateAction<IAuthContext>>
>(undefined!);
