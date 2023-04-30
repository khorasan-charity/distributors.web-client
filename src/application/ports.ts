import { Distributor } from "../domain/Distributor";
import { Donor } from "../domain/Donor";
import { User } from "../domain/User";

export interface DonorApiService {
  add(donor: Donor): Promise<void>;
  update(donor: Donor): Promise<void>;
  remove(donorId: Id): Promise<void>;
}

export interface DistributorApiService {
  add(distributor: Distributor): Promise<void>;
  update(distributor: Distributor): Promise<void>;
  remove(distributorId: Id): Promise<void>;
}

export interface AuthApiService {
  login(username: string, password: string): Promise<User>;
  logout(): Promise<void>;
}

export interface AuthContextService {
  login(user: User): void;
  logout(): void;
}

export interface NotificationService {
  success(msg: string): void;
  error(msg: string): void;
}

export interface LocalStorageService {
  removeKey(key: string): void;
  setString(key: string, strValue: string): void;
  getString(key: string): string;
  setObject<T extends object>(key: string, value: T): void;
  getObject<T, TDefault>(key: string, defaultValue: TDefault): T | TDefault;
}
