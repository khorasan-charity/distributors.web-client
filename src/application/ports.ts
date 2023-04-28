import { Distributor } from "../domain/Distributor";
import { Donor } from "../domain/Donor";

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
