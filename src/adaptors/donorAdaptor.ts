import { DonorApiService } from "../application/ports";
import { Donor } from "../domain/Donor";

export function useDonorService(): DonorApiService {
  return {
    getList: async (asyncFn: () => Promise<Donor[]>) => {
      return asyncFn();
    },
    add: async (asyncFn, donor) => {
      return asyncFn(donor);
    },
    update: async (asyncFn, donor) => {
      return asyncFn(donor);
    },
    remove: async donorId => {},
  };
}
