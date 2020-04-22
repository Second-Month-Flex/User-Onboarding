import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import axios from "axios";
import * as yup from "yup";

const initialForm = {
  name: "",
  email: "",
  password: "",
  terms: "",
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

const formSchema = yup.object().shape({
  name: yup.string().required("Must have a Name"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup.string().required("Must have a password"),
});

function App() {
  const [form, setForm] = useState(initialForm);
  const [members, setMembers] = useState([]);

  //setting state for the button
  const [formDisabled, setFormDisabled] = useState(true);
  //state for erros
  const [errors, setErrors] = useState(initialFormErrors);

  const Changing = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <Form values={form} onInputChange={Changing} errors={errors} />
    </div>
  );
}

export default App;
