import { Field, Formik, Form } from "formik";
import * as yup from "yup";
import { Donor } from "../../domain/Donor";
import { useAddDonor } from "../../application/addDonor";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("ورود این فیلد الزامی است"),
  lastName: yup.string().required("ورود این فیلد الزامی است"),
  nationalCode: yup
    .string()
    .required("ورود این فیلد الزامی است")
    .min(10, "کد ملی ۱۰ رقم می‌باشد")
    .max(10, "کد ملی ۱۰ رقم می‌باشد"),
  phoneNumber: yup
    .string()
    .required("ورود این فیلد الزامی است")
    .min(11, "تلفن همراه ۱۱ رقم می‌باشد")
    .max(11, "تلفن همراه ۱۱ رقم می‌باشد"),
  address: yup.string().required("ورود این فیلد الزامی است"),
});

const DonorForm = () => {
  const { addDonor } = useAddDonor();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        nationalCode: "",
        phoneNumber: "",
        address: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values: Donor, { resetForm }) => {
        await addDonor(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="bg-white flex flex-col sm:flex-col p-5 space-y-5 h-full">
          <div className="flex flex-col sm:flex-col gap-5">
            <div>
              <Field
                autoComplete="off"
                className="bg-slate-200 rounded-md w-full p-2 sm:w-fit active:border-slate-700 focus:border-slate-700"
                name="firstName"
                placeholder="نام"
              />
              <small className="text-red-500 text-xs ms-2">
                {errors.firstName && touched.firstName
                  ? errors.firstName
                  : null}
              </small>
            </div>

            <div>
              <Field
                autoComplete="off"
                className="bg-slate-200 rounded-md w-full p-2 sm:w-fit active:border-slate-700 focus:border-slate-700"
                name="lastName"
                placeholder="نام خانوادگی"
              />
              <small className="text-red-500 text-xs ms-2">
                {errors.lastName && touched.lastName ? errors.lastName : null}
              </small>
            </div>

            <div>
              <Field
                autoComplete="off"
                className="bg-slate-200 rounded-md w-full p-2 sm:w-fit active:border-slate-700 focus:border-slate-700"
                name="nationalCode"
                placeholder="شماره ملی"
              />
              <small className="text-red-500 text-xs ms-2">
                {errors.nationalCode && touched.nationalCode
                  ? errors.nationalCode
                  : null}
              </small>
            </div>
            <div>
              <Field
                autoComplete="off"
                className="bg-slate-200 rounded-md w-full p-2 sm:w-fit active:border-slate-700 focus:border-slate-700"
                name="phoneNumber"
                placeholder="تلفن همراه"
              />
              <small className="text-red-500 text-xs ms-2">
                {errors.phoneNumber && touched.phoneNumber
                  ? errors.phoneNumber
                  : null}
              </small>
            </div>
            <div>
              <Field
                autoComplete="off"
                className="bg-slate-200 rounded-md w-full p-2 sm:w-fit active:border-slate-700 focus:border-slate-700"
                name="address"
                placeholder="آدرس"
              />
              <small className="text-red-500 text-xs ms-2">
                {errors.address && touched.address ? errors.address : null}
              </small>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-orange-400 rounded-md p-2 text-white w-full sm:w-fit"
            >
              ثبت
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DonorForm;
