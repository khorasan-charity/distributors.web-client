import { useFormik } from "formik";
import * as yup from "yup";
import { Donor } from "../../domain/Donor";

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  nationalCode: yup.string().required().min(10).max(10),
  phoneNumber: yup.string().required().min(11).max(11),
});

const DonorForm = () => {
  const formik = useFormik<Donor>({
    validationSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      nationalCode: "",
      phoneNumber: "",
    },
    onSubmit: values => {
      console.log({ values });
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
