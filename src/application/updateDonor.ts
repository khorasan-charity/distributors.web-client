import useAxios from "../adaptors/axios/axiosAdaptor";
import { useDonorService } from "../adaptors/donorAdaptor";
import { useNotification } from "../adaptors/notification/notificationAdaptor";
import { Donor } from "../domain/Donor";

export function useUpdateDonor() {
  const axios = useAxios();
  const notificationService = useNotification();
  const donorService = useDonorService();

  const updateDonor = async (donor: Donor) => {
    await donorService.update(async donor => {
      const res = await axios.put<Donor>(`/donors/${donor.id}`, {
        data: donor,
      });

      if (res.status === 200) {
        notificationService.success("Donor created");
      }

      return res.data;
    }, donor);
  };

  return {
    updateDonor,
  };
}
