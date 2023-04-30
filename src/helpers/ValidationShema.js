import * as yup from 'yup';

export const ValidationShema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter valid email')
    .required('This is a required field'),
  name: yup
    .string('Enter your name')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .min(2, 'the name should contain at least 2 characters')
    .required('This is a required field'),
});
