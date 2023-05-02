import useAxios from "../adaptors/axios/axiosAdaptor";
import { useDonorService } from "../adaptors/donorAdaptor";
import { useNotification } from "../adaptors/notification/notificationAdaptor";
import { Donor } from "../domain/Donor";

// TODO: move to file in ui
const useWithErrorHandler = <D>(fn: (args?: any) => Promise<D>): typeof fn => {
  const notificationService = useNotification();
  const runner: typeof fn = async () => {
    try {
      const res = await fn();
      return res;
    } catch (err) {
      notificationService.error("Error");
      throw Error();
    }
  };

  return runner;
};

export function useAddDonor() {
  const notificationService = useNotification(); // Dependency injection
  const axios = useAxios(); // Dependency injection
  const addDonorWithDefaultErrorHandler = useWithErrorHandler<Donor>(
    async (donor: Donor) => {
      const res = await axios.post<Donor>("/donors", { data: donor });

      notificationService.success("Donor created");

      return res.data;
    },
  );
  const donorService = useDonorService({
    addAsyncFn: donor => addDonorWithDefaultErrorHandler(donor),
  }); // Dependency injection

  const addDonor = async (donor: Donor) => {
    await donorService.add(donor);
  };

  return {
    addDonor,
  };
}
