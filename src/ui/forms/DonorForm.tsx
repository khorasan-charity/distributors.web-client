import { useFormik } from "formik";
import * as yup from "yup";
import { Donor } from "../../domain/Donor";
import { useAddDonor } from "../../application/addDonor";

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  nationalCode: yup.string().required().min(10).max(10),
  phoneNumber: yup.string().required().min(11).max(11),
  address: yup.string().required(),
});

const DonorForm = () => {
  const { addDonor } = useAddDonor();
  const formik = useFormik<Donor>({
    validationSchema,
    initialValues: {
      firstName: "",
      lastName: "Test",
      nationalCode: "1234567890",
      phoneNumber: "09155253636",
      address: "Meshad",
    },
    onSubmit: async values => {
      await addDonor(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="firstName" onChange={formik.handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default DonorForm;
