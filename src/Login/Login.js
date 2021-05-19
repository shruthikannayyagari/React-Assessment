import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

export const Container = styled.div`
  color: palevioletred;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;

const Button = styled.button`
  background: "palevioletred";
  color: "white";
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  cursor: pointer;
  margin: 2rem 0rem;
  border-radius: 3px;
`;

function Login() {
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    let { email, password } = values;
    setSubmitting(false);
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Label>
                Email: <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </Label>
              <Label>
                Password:
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </Label>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default Login;
