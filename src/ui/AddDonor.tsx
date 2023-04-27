import { useAddDonor } from "../application/addDonor";

const AddDonor = () => {
  const { addDonor } = useAddDonor();

  const handleClick = async () => {
    await addDonor({
      firstName: "",
      lastName: "",
      nationalCode: "",
      phoneNumber: "",
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Add Donor</button>
    </div>
  );
};

export default AddDonor;
