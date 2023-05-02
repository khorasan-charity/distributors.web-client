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
      lastName: "",
      nationalCode: "",
      phoneNumber: "",
      address: "",
    },
    onSubmit: async values => {
      console.log({ values });
      await addDonor(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="firstName"
        placeholder="firstName"
        onChange={formik.handleChange}
      />
      <input
        name="lastName"
        placeholder="lastName"
        onChange={formik.handleChange}
      />
      <input
        name="nationalCode"
        placeholder="nationalCode"
        onChange={formik.handleChange}
      />
      <input
        name="phoneNumber"
        placeholder="phoneNumber"
        onChange={formik.handleChange}
      />
      <input
        name="address"
        placeholder="address"
        onChange={formik.handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default DonorForm;
