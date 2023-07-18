import { object, string } from "yup";

export const userSchema = object().shape({
  username: string().required("Пожалуйста, заполните поле"),
  password: string()
    .required("Пожалуйста, введите пароль")
    .min(8, "Введите пароль не менее 8 символов"),
});
