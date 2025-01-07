import { Box, Button, TextField } from '@mui/material'
import * as yup from "yup";
import { useFormik } from 'formik';
import { useState } from 'react';
 
 const Signin = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const formValidationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const { handleBlur, handleChange, handleSubmit, values, errors, touched, isValid,isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const data = await response.json(); // Parse the error response
          throw new Error(data.message || 'Something went wrong');
        }

        const data = await response.json();
        console.log('Login successful:', data);
        setErrorMessage(''); // Clear any previous error message
      } catch (error) {
        setErrorMessage(error.message); // Set error message to display in UI
      }
    },
  });
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <form className='flex flex-col items-center gap-2' onSubmit={handleSubmit}>
      <TextField
        required
        name="email"
        value={values.email}
        onChange={handleChange} label="Email" error={touched.email && Boolean(errors.email)} onBlur={handleBlur}
        helperText={touched.email && errors.email ? errors.email : null}
      />
      <TextField
        required
        name="password"
        value={values.password}
        onChange={handleChange} label="Password" error={touched.password && Boolean(errors.password)} onBlur={handleBlur}
        helperText={touched.password && errors.password ? errors.password : null}
      /> 
      {errorMessage && (
          <p className="text-red-500 text-center">
          {errorMessage}
          </p>
        )}
      <Button disabled={!isValid || isSubmitting} type= "submit"variant="contained">Submit</Button>
      {/* text for signup */}
      <p className='text-1xl'>Don't have an account?</p>
      <Button href="/signup" variant="text">Sign Up </Button>
      </form>
    </Box>
    )
 }
 
 export default Signin