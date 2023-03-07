import * as Yup from "yup";

export const SignUpSchema = Yup.object({ 
  email: Yup.string().email().required("please enter email"),
    password: Yup.string().min(6).required("please enter password"),

});