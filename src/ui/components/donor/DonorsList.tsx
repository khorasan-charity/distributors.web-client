import { useEffect, useState } from "react";
import { useDonorsList } from "../../../application/donor/getList";
import { useNotification } from "../../../adaptors/notification/notificationAdaptor";

// TODO: move to it's file in application layer
function useApi<D>(asyncFn: () => Promise<D>) {
  const notificationService = useNotification();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<D | null>(null);

  const runner = async () => {
    setLoading(true);
    try {
      const res = await asyncFn();

      setData(res);

      return res;
    } catch (err) {
      console.log({ err });
      notificationService.error("Failed with error");
      throw Error();
    } finally {
      setLoading(false);
    }
  };

  return [
    runner,
    {
      data,
      loading,
    },
  ] as [
    typeof runner,
    {
      loading: boolean;
      data: D;
    }
  ];
}

const DonorsList = () => {
  const { getList } = useDonorsList();
  const [runner, { loading, data: list }] = useApi(getList);

  const getAll = async () => {
    await runner();
  };

  useEffect(() => {
    getAll();
  }, []);

  if (loading || !list) return <div>loading</div>;

  return (
    <div>
      {list.map((l) => (
        <div key={l.id}>{l.nationalCode}</div>
      ))}
    </div>
  );
};

export default DonorsList;
