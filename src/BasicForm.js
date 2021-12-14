import { useFormik } from "formik";

const formValidation = (values) => {
  const errors = {};
  console.log("formValidation", values);
  if (values.password.length < 8) {
    errors.password = "Please enter longer password";
  }
  return errors;
};
export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "teddy@", password: "" },
    validate: formValidation,
    onSubmit: (values) => {
      console.log("OnSubmit", values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          placeholder="Enter your email"
        />
        {formik.errors.email}
        <input
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          placeholder="Enter your password"
          required
        />
        {formik.errors.password}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
