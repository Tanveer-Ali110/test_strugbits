import * as Yup from 'yup';

export const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    profilePhoto: Yup.mixed().required('Required'),
  });