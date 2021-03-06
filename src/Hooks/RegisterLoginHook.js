import { useState } from "react";
import { useSelector } from "react-redux";
/* custom hook for register user page functionality */
export default function useInput(prefillUserData) {
  /* input values */
  const { user } = useSelector((state) => state.user);

  const [data, setData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: prefillUserData ? user.email : "",
    firstName: prefillUserData ? user.firstName : "",
    lastName: prefillUserData ? user.lastName : "",
    city: prefillUserData ? user.city : "",
    country: prefillUserData ? user.country : "",
    phoneNumber: prefillUserData ? user.phoneNumber : "",
    street: prefillUserData ? user.street : "",
    houseNumber: prefillUserData ? user.houseNumber : ""
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    firstName: false,
    lastName: false,
    city: false,
    country: false,
    phoneNumber: false,
    houseNumber: false
  });
  /* errors about passwords not matching , and password length */
  const [errors, setErrors] = useState({
    passwordMissmatch: false,
    passwordLength: false
  });

  function handleChange(e) {
    /* take value and name from the event */
    const { name, value } = e.target;
    /* set input value to the value from the event.target (input in the register page must have the name matching one of the input values variable at the top of the hook) */
    setData({ ...data, [name]: value });
    /* if we are entering text in password or congirmPassword perform the following check */
    if ((name === "password") | (name === "confirmPassword")) {
      /* if we are entering text in password input perform password length validation and password missmatch validation */
      if (name === "password") {
        setErrors({
          passwordLength: value.length < 6,
          passwordMissmatch: !(data.confirmPassword === value)
        });
      }
      /* if we are entering text in confirmPassword perform password mathcing validation */
      if (name === "confirmPassword") {
        setErrors({ ...errors, passwordMissmatch: !(data.password === value) });
      }
    }
  }
  return [data, handleChange, errors, touched, setTouched, setData];
}
