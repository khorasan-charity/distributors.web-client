import { useDonorService } from "../adaptors/donorAdaptor";
import { Donor } from "../domain/Donor";

export function useAddDonor() {
  const donorService = useDonorService();

  const addDonor = async (donor: Donor) => {
    await donorService.add(donor);
  };

  return {
    addDonor,
  };
}
