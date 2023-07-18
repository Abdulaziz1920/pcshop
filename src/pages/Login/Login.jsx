import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "../../schema/login";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
        if(values.password == "123456789" && values.username == "admin") {
          navigate("/main")
        }
    },
    validationSchema: userSchema,
  });
  return (
    <Fragment>
      <section id="login">
        <div className="container">
          <div data-aos="fade-up" data-aos-duration="2000" className="login">
            <form onSubmit={formik.handleSubmit}>
              <input name="username" placeholder="Username" onChange={formik.handleChange} value={formik.values.username} type="text" />
              {formik.touched?.username && formik.errors?.username ? <p className="first">{formik.errors.username}</p> : null}
              <input name="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} type="password" />
              {formik.touched?.password && formik.errors?.password ? <p className="second">{formik.errors.password}</p> : null}
              <button type="submit" className="btn">Войти</button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;