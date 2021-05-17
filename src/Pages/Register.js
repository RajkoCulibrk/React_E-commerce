import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useInput from "../Hooks/RegisterLoginHook";
import { register } from "../Redux/Actions/UserActions";

const Register = () => {
  const dispatch = useDispatch();
  const [data, handleChange, errors, touched, setTouched] = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(data));
  };
  return (
    <Container fluid className="d-flex justify-content-center ">
      <Form onSubmit={(e) => handleSubmit(e)} className="d-flex flex-column">
        <h3 className="text-center">Login</h3>
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            value={data.firstName}
            className={`${
              touched.firstName && !data.firstName && "is-invalid"
            }`}
            onChange={(e) => handleChange(e)}
            onBlur={() => setTouched({ ...touched, firstName: true })}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          {touched.firstName && !data.firstName && (
            <Form.Text className="invalid-feedback">
              Please provide your firt name.
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            value={data.lastName}
            className={`${touched.lastName && !data.lastName && "is-invalid"}`}
            onChange={(e) => handleChange(e)}
            onBlur={() => setTouched({ ...touched, lastName: true })}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          {touched.lastName && !data.lastName && (
            <Form.Text className="invalid-feedback">
              Please provide your last name.
            </Form.Text>
          )}
        </Form.Group>
        <Form.Row>
          <Col xs={7}>
            <Form.Group>
              <Form.Label>Street </Form.Label>
              <Form.Control
                value={data.street}
                className={`${touched.street && !data.street && "is-invalid"}`}
                onChange={(e) => handleChange(e)}
                onBlur={() => setTouched({ ...touched, street: true })}
                type="text"
                name="street"
                placeholder="Street"
              />
              {touched.street && !data.street && (
                <Form.Text className="invalid-feedback">
                  Please provide your street.
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col xs={5}>
            <Form.Group>
              <Form.Label>House Number </Form.Label>
              <Form.Control
                value={data.houseNumber}
                className={`${
                  touched.houseNumber && !data.houseNumber && "is-invalid"
                }`}
                onChange={(e) => handleChange(e)}
                onBlur={() => setTouched({ ...touched, houseNumber: true })}
                type="text"
                name="houseNumber"
                placeholder="House Number"
              />
              {touched.houseNumber && !data.houseNumber && (
                <Form.Text className="invalid-feedback">
                  Please provide your house number.
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>City </Form.Label>
              <Form.Control
                className={`${touched.city && !data.city && "is-invalid"}`}
                value={data.city}
                onChange={(e) => handleChange(e)}
                onBlur={() => setTouched({ ...touched, city: true })}
                type="text"
                name="city"
                placeholder="City"
              />
              {touched.city && !data.city && (
                <Form.Text className="invalid-feedback">
                  Provide your city.
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Country </Form.Label>
              <Form.Control
                className={`${
                  touched.country && !data.country && "is-invalid"
                }`}
                value={data.country}
                onChange={(e) => handleChange(e)}
                onBlur={() => setTouched({ ...touched, country: true })}
                type="text"
                name="country"
                placeholder="Country"
              />
              {touched.country && !data.country && (
                <Form.Text className="invalid-feedback">
                  Provide your country.
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group>
          <Form.Label>Phone Number </Form.Label>
          <Form.Control
            value={data.phoneNumber}
            className={`${
              touched.phoneNumber && !data.phoneNumber && "is-invalid"
            }`}
            onChange={(e) => handleChange(e)}
            onBlur={() => setTouched({ ...touched, phoneNumber: true })}
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
          />
          {touched.phoneNumber && !data.phoneNumber && (
            <Form.Text className="invalid-feedback">
              Provide your country.
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={data.email}
            className={`${touched.email && !data.email && "is-invalid"}`}
            onChange={(e) => handleChange(e)}
            onBlur={() => setTouched({ ...touched, email: true })}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          {touched.email && !data.email && (
            <Form.Text className="invalid-feedback">
              Provide your country.
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={data.password}
            className={`${touched.password && !data.password && "is-invalid"}`}
            onChange={(e) => handleChange(e)}
            onBlur={() => setTouched({ ...touched, password: true })}
            type="password"
            name="password"
            placeholder="Password"
          />

          {touched.password && !data.password && (
            <Form.Text className="invalid-feedback">
              Provide your password.
            </Form.Text>
          )}
          {touched.password && errors.passwordLength && (
            <Form.Text className="text-danger">Password length.</Form.Text>
          )}
          {touched.password &&
            errors.passwordMissmatch &&
            touched.confirmPassword && (
              <Form.Text className="text-danger">
                Passwords do not match.
              </Form.Text>
            )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={data.confirmPassword}
            className={`${
              touched.confirmPassword && !data.confirmPassword && "is-invalid"
            }`}
            onChange={(e) => handleChange(e)}
            onBlur={() => setTouched({ ...touched, confirmPassword: true })}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          {touched.confirmPassword && !data.confirmPassword && (
            <Form.Text className="invalid-feedback">
              Please confrim your password.
            </Form.Text>
          )}
        </Form.Group>
        <Button
          disabled={
            !data.firstName ||
            !data.lastName ||
            !data.street ||
            !data.houseNumber ||
            !data.city ||
            !data.country ||
            !data.phoneNumber ||
            !data.email ||
            !data.password ||
            !data.confirmPassword ||
            errors.passwordMissmatch ||
            errors.passwordLength
          }
          variant="primary"
          type="submit"
          className="align-self-center"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
