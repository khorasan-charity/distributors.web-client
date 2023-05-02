import useAxios from "../../adaptors/axios/axiosAdaptor";
import { useDonorService } from "../../adaptors/donorAdaptor";
import { Donor } from "../../domain/Donor";

export function useDonorsList() {
  const donorService = useDonorService();
  const axios = useAxios();

  const getList = async () => {
    const donorsList = await donorService.getList(
      async (): Promise<Donor[]> => {
        const res = await axios.get<{
          data: {
            attributes: {
              address: string;
              createdAt: string;
              firstName: string;
              lastName: string;
              nationalCode: string;
              phoneNumber: string;
              publishedAt: string;
              updatedAt: string;
            };
            id: number;
          }[];
        }>("/donors");

        if (res.status === 200) console.log({ res });

        return res.data.data.map((d) => ({
          address: d.attributes.address,
          firstName: d.attributes.firstName,
          lastName: d.attributes.lastName,
          nationalCode: d.attributes.nationalCode,
          phoneNumber: d.attributes.phoneNumber,
          id: d.id,
        }));
      }
    );

    return donorsList;
  };

  return {
    getList,
  };
}
