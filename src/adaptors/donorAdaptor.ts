import { DonorApiService } from "../application/ports";

export function useDonorService(): DonorApiService {
  return {
    add: async donor => {},
    update: async donor => {},
    remove: async donorId => {},
  };
}
