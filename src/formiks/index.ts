import { useFormik } from "formik";
import { customerInitialValues } from "./initialValues";
import { validationSchema } from "./schema";
import { createAndUpdateCustomer } from "../utils/apiHelpers";
import { useAppDispatch } from "state/hooks";
import { addCustomer, editCustomer } from "state/customer";

export const useCreateCustomer = (closeModel: () => void) => {
  const dispatch = useAppDispatch();
  const { values, setFieldValue, handleSubmit, handleChange, errors, touched } =
    useFormik({
      initialValues: customerInitialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, { resetForm }) => {
        let formdata = new FormData();
        formdata.append("name", values.name);
        formdata.append("user_name", values.username);
        formdata.append("email", values.email);
        if (values.profilePhoto) {
          formdata.append("profile_picture", values.profilePhoto);
        }
        const data = await createAndUpdateCustomer(formdata);
        if (data) {
          dispatch(addCustomer({ customer: data }));
          closeModel();
          resetForm();
        }
      },
    });
  return { values, setFieldValue, handleSubmit, handleChange, errors, touched };
};

export const useEditCustomer = (closeModel: () => void, customer: any) => {
  const dispatch = useAppDispatch();
  const { values, setFieldValue, handleSubmit, handleChange, errors, touched } =
    useFormik({
      initialValues: {
        username: customer.user_name,
        name: customer.name,
        email: customer.email,
        profilePhoto: customer.profile_picture,
      },
      validationSchema: validationSchema,
      onSubmit: async (values, { resetForm }) => {
        let formdata = new FormData();
        formdata.append("name", values.name);
        formdata.append("user_name", values.username);
        formdata.append("email", values.email);
        if (values.profilePhoto) {
          formdata.append("profile_picture", values.profilePhoto);
        }
        const data = await createAndUpdateCustomer(formdata, customer._id);
        if (data) {
          dispatch(editCustomer({ editCustomer: data }));
          resetForm();
          closeModel();
        }
      },
    });
  return { values, setFieldValue, handleSubmit, handleChange, errors, touched };
};
