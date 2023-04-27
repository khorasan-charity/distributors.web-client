import { useDonorService } from "../adaptors/donorAdaptor";
import { Donor } from "../domain/Donor";

export function useUpdateDonor() {
  const donorService = useDonorService();

  const updateDonor = async (donor: Donor) => {
    await donorService.update(donor);
  };

  return {
    updateDonor,
  };
}
