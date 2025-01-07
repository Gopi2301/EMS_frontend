import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const formValidationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    name: yup.string().required("Name is required"),
    admin: yup.boolean(),
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      admin: false,
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
        console.log(values);
      try {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const data = await response.json(); // Parse the error response
          throw new Error(data.message || "Something went wrong");
        }

        const data = await response.json();
        console.log("Signup successful:", data);
        setErrorMessage(""); // Clear any previous error message
      } catch (error) {
        setErrorMessage(error.message); // Set error message to display in UI
      }
    },
  });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
        <TextField
          required
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}  helperText={touched.name && errors.name ? errors.name : null}
        />
        <TextField
          required
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email ? errors.email : null}
        />
        <TextField
          required
          name="password"
          label="Enter Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password ? errors.password : null}
        />
        <TextField
          required
          name="confirmPassword"
          label="confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)} helperText={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : null}
        />
        <FormControlLabel
          name="admin"
          control={<Checkbox />}
          label="check if you are Admin?"
            value={values.admin}
            onChange={handleChange}
        />
        {errorMessage && (
            <p className="text-red-500 text-center">
                {errorMessage}
            </p>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid || isSubmitting} >Submit</Button>
          <Button href="/signin" variant="text">Sign in </Button>
      </form>
    </Box>
  );
};

export default Signup;
