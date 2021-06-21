import React from "react";
import { Col, Form } from "react-bootstrap";

const OrderDetails = ({ useInput }) => {
  const { data, handleChange, touched, setTouched } = useInput;
  return (
    <div>
      <Form className="d-flex flex-column mt-3 ">
        <h4 className="text-center">Your Info</h4>
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
              <Form.Label> Number </Form.Label>
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
      </Form>
    </div>
  );
};

export default OrderDetails;
