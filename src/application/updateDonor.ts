import useAxios from "../adaptors/axios/axiosAdaptor";
import { useDonorService } from "../adaptors/donorAdaptor";
import { useNotification } from "../adaptors/notification/notificationAdaptor";
import { Donor } from "../domain/Donor";

export function useUpdateDonor() {
  const axios = useAxios();
  const notificationService = useNotification();
  const donorService = useDonorService({
    addAsyncFn: async donor => {
      const res = await axios.post<Donor>("/donors", donor);

      if (res.status === 200) {
        notificationService.success("Donor created");
      }

      return res.data;
    },
  });

  const updateDonor = async (donor: Donor) => {
    await donorService.update(donor);
  };

  return {
    updateDonor,
  };
}
