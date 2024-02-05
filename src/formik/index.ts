import { useFormik } from "formik";
import { customerInitialValues } from "./initialValues";
import { validationSchema } from "./schema";


export const useCreateCustomer =()=>{

    const { setFieldValue, handleSubmit, handleChange, errors, touched } =
    useFormik({
      initialValues: customerInitialValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log("Submitted values:", values);
        // toggleModel();
      },
    });
return{setFieldValue, handleSubmit, handleChange, errors, touched}
}