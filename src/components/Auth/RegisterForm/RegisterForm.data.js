import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    password: "",
    confirmPasswor: "",
  };
};
export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Email es obligatorio")
      .required("Campo obligatorio"),

    password: Yup.string().required("La contraseña es obligatoria"),
    confirmPasswor: Yup.string()
      .required("Contraseña obligatoria")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  });
};
