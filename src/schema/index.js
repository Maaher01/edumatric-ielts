import * as yup from "yup";

// min 11 characters, max 14 characters.
const mobileRules = /^\d{11,14}$/;

export const paymentFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(mobileRules, "Mobile number must be between 11 and 14 digits"),
  eventdate: yup.string().required("Time is required"),
});
