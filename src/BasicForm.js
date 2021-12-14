import { useFormik } from "formik";
import * as yup from "yup";
// //call validation if password then calls On submit
// const formValidation = (values) => {
//   const errors = {};
//   console.log("formValidation", values);
//   //add validation email min 5 chars
//   if (values.email.length < 5) {
//     errors.email = "Please enter longer email ";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   //add validation password max 12 and min 8
//   if (values.password.length < 8) {
//     errors.password = "Please enter longer password";
//   } else if (values.password.length > 12) {
//     errors.password = "Please enter shorter password";
//   }
//   return errors;
// };
// export function BasicForm() {
//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validate: formValidation,
//     onSubmit: (values) => {
//       console.log("OnSubmit", values);
//     },
//   });
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           id="email"
//           name="email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           type="email"
//           placeholder="Enter your email"
//         />
//         {/* //we should  show thw error only when they touch form and come outside */}
//         {formik.errors.email && formik.touched.email ? formik.errors.email : ""}
//         <input
//           id="password"
//           name="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           type="password"
//           placeholder="Enter your password"
//           required
//         />
//         {formik.errors.password && formik.touched.password
//           ? formik.errors.password
//           : ""}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// //==================================================================================
// //to avaid the repeatation of the formik how can we do ?
// //using destructing
// //call validation if password then calls On submit
// const formValidation = (values) => {
//   const errors = {};
//   console.log("formValidation", values);
//   //add validation email min 5 chars
//   if (values.email.length < 5) {
//     errors.email = "Please enter longer email ";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   //add validation password max 12 and min 8
//   if (values.password.length < 8) {
//     errors.password = "Please enter longer password";
//   } else if (values.password.length > 12) {
//     errors.password = "Please enter shorter password";
//   }
//   return errors;
// };
// export function BasicForm() {
//   const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
//     useFormik({
//       initialValues: { email: "", password: "" },
//       validate: formValidation,
//       onSubmit: (values) => {
//         console.log("OnSubmit", values);
//       },
//     });
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           id="email"
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           type="email"
//           placeholder="Enter your email"
//         />
//         {/* //we should  show thw error only when they touch form and come outside */}

//         {errors.email && touched.email ? errors.email : ""}
//         <input
//           id="password"
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           type="password"
//           placeholder="Enter your password"
//           required
//         />
//         {errors.password && touched.password ? errors.password : ""}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

//==================================================================================
//to avaid the repeatation of the formik how can we do ?
//using destructing
//call validation if password then calls On submit

// const formValidation = (values) => {
//   const errors = {};
//   console.log("formValidation", values);
//   //add validation email min 5 chars
//   if (values.email.length < 5) {
//     errors.email = "Please enter longer email ";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   //add validation password max 12 and min 8
//   if (values.password.length < 8) {
//     errors.password = "Please enter longer password";
//   } else if (values.password.length > 12) {
//     errors.password = "Please enter shorter password";
//   }
//   return errors;
// };
//starts here
const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "Need a bigger eamil")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched")
    .required("Why not fill this email"),
  password: yup
    .string()
    .min(8, "Need a longer password")
    .max(12, "Too much password")
    .required("Why not fill this Password"),
});
export function BasicForm() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationSchema,
      // validate: formValidation,
      onSubmit: (values) => {
        console.log("OnSubmit", values);
      },
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Enter your email"
        />
        {/* //we should  show thw error only when they touch form and come outside */}

        {errors.email && touched.email ? errors.email : ""}
        <input
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="Enter your password"
          required
        />
        {errors.password && touched.password ? errors.password : ""}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
