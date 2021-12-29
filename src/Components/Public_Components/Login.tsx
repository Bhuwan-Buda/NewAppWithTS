import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authenticateFunction } from "../../Redux/Authentication/thunk";
import { useDispatch } from "react-redux";

interface initialValuesInterface {
  email: string;
  password: string;
  acceptTerms: boolean;
}

const initialValues: initialValuesInterface = {
  email: "",
  password: "",
  acceptTerms: false,
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address!!")
    .required("Email is required!!"),
  password: Yup.string().required("Password is mandatory"),
  acceptTerms: Yup.bool()
    .oneOf([true], "Please select our terms and conditions.")
    .required("Terms and conditions should be accepted."),
});

const Login: React.FC<{}> = () => {
  console.log("Login loaded");
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, onSubmitProps) => {
        console.log(values);
        dispatch(authenticateFunction());
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
      }}
    >
      {(formik) => {
        return (
          <Form className="container text-white bg-black p-3 form-control login-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="abc@example.com"
                className="form-control"
              />
              <i className="text-danger">
                <ErrorMessage name="email" />
              </i>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Vdoeqr@3wjf"
                className="form-control"
              />
              <i className="text-danger">
                <ErrorMessage name="password" />
              </i>
            </div>
            <div className="mb-3">
              <Field type="checkbox" id="terms" name="acceptTerms" />{" "}
              <label htmlFor="terms" className="form-label">
                Accept terms and conditions.
              </label>
              <br />
              <i className="text-danger">
                <ErrorMessage name="acceptTerms" />
              </i>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-outline-primary btn-sm"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                <i className="fas fa-arrow-right"></i> Login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
