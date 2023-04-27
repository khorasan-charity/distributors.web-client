import { IDonorApiService } from "../application/ports";

export function useDonorService(): IDonorApiService {
  return {
    add: async donor => {},
    update: async donor => {},
    remove: async donorId => {},
  };
}
