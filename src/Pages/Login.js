import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import useInput from "../Hooks/RegisterLoginHook";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Actions/UserActions";

const Login = () => {
  const dispatch = useDispatch();
  const [data, handleChange] = useInput();
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: data.email, password: data.password }));
  };
  return (
    <Container fluid className="d-flex justify-content-center">
      <Form
        onSubmit={(e) => handleSubmit(e)}
        className="d-flex flex-column login_register_form"
      >
        <h3 className="text-center">Login</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={data.email}
            onChange={(e) => handleChange(e)}
            onBlur={() => setTouched({ ...touched, email: true })}
            type="email"
            name="email"
            placeholder="Enter email"
          />

          {touched.email && !data.email && (
            <Form.Text className="invalid-input">
              Please provide your email.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={data.password}
            onChange={(e) => handleChange(e)}
            onBlur={() => setTouched({ ...touched, password: true })}
            type="password"
            name="password"
            placeholder="Password"
          />
          {touched.password && !data.password && (
            <Form.Text className="invalid-input">
              Please provide your password.
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="align-self-center">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
