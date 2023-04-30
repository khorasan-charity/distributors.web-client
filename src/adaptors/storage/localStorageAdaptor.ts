import { LocalStorageService } from "../../application/ports";

export function useLocalStorage(): LocalStorageService {
  const storage = window.localStorage;

  return {
    removeKey: key => {
      storage.removeItem(key);
    },
    getString: key => {
      return storage.getItem(key) ?? "";
    },
    setString: (key, strValue) => {
      storage.setItem(key, strValue);
    },
    setObject: (key, value) => {
      storage.setItem(key, JSON.stringify(value));
    },
    getObject: (key, defaultValue) => {
      const val = storage.getItem(key);
      return val ? JSON.parse(val) : defaultValue;
    },
  };
}
