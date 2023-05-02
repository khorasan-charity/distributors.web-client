import axios from "axios";
import { useLocalStorage } from "../storage/localStorageAdaptor";
import { User } from "../../domain/User";

export default function useAxios() {
  const storageService = useLocalStorage(); // Dependency injection

  const jwt = storageService.getObject<User, null>("user", null)?.jwt;

  const _axios = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
      Authorization: jwt ? `Bearer ${jwt}` : undefined,
    },
  });

  return _axios;
}
