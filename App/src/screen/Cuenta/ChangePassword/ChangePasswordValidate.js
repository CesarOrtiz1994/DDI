import * as Yup from "yup";

export function initialValues(password) {
  return {
    password: password || "",
    confirmPassword: password || "",
  };
}

export function validationSchema() {
  return Yup.object().shape({
    password: Yup.string().required(true),
    confirmPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], true),
  });
}
