import { DonorApiService } from "../application/ports";
import { Donor } from "../domain/Donor";

export function useDonorService({
  addAsyncFn,
}: {
  addAsyncFn: (donor: Donor) => Promise<Donor>;
}): DonorApiService {
  return {
    add: async donor => {
      return addAsyncFn(donor);
    },
    update: async donor => {
      return addAsyncFn(donor);
    },
    remove: async donorId => {},
  };
}
