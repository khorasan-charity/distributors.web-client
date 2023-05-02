import useAxios from "../adaptors/axios/axiosAdaptor";
import { useDonorService } from "../adaptors/donorAdaptor";
import { useNotification } from "../adaptors/notification/notificationAdaptor";
import { Donor } from "../domain/Donor";

export function useAddDonor() {
  const notificationService = useNotification(); // Dependency injection
  const axios = useAxios(); // Dependency injection
  const donorService = useDonorService({
    addAsyncFn: async donor => {
      const res = await axios.post<Donor>("/donors", { data: donor });

      if (res.status === 200) {
        notificationService.success("Donor created");
      }

      return res.data;
    },
  }); // Dependency injection

  const addDonor = async (donor: Donor) => {
    await donorService.add(donor);
  };

  return {
    addDonor,
  };
}
