import { useUpdateDonor } from "../application/updateDonor";

const EditDonor = () => {
  const { updateDonor } = useUpdateDonor();

  const handleClick = async () => {
    await updateDonor({
      firstName: "",
      lastName: "",
      nationalCode: "",
      phoneNumber: "",
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Update donor</button>
    </div>
  );
};

export default EditDonor;
