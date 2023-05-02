import { useDonorService } from "../adaptors/donorAdaptor";
import { useNotification } from "../adaptors/notification/notificationAdaptor";
import { Donor } from "../domain/Donor";

export function useAddDonor() {
  const donorService = useDonorService(); // Dependency injection
  const notificationService = useNotification(); // Dependency injection

  const addDonor = async (donor: Donor) => {
    await donorService.add(donor);

    notificationService.success("Hello World");
  };

  return {
    addDonor,
  };
}
