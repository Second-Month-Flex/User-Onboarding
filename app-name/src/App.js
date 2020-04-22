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

  const url = "https://reqres.in/api/users";

  const getMembers = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.data);
        setMembers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMembers();
  }, []);

  const postMember = (member) => {
    axios.post(url, member).then((res) => {
      setMembers([...members, res.data]);
    });
  };

  useEffect(() => {
    formSchema.isValid(form).then((valid) => {
      setFormDisabled(!valid);
    });
  }, [form]);

  const onSubmit = (event) => {
    event.preventDefault();

    const newMember = {
      name: form.name,
      email: form.email,
      password: form.password,
      terms: form.terms,
    };
    postMember(newMember);
    setForm(initialForm);
  };

  const checkbox = (evt) => {
    const { name } = evt.target;
    const isChecked = evt.target.checked;

    setForm({
      ...form,
      [name]: isChecked,
    });
  };
  return (
    <div className="App">
      <Form
        onCheckboxChange={checkbox}
        values={form}
        onInputChange={Changing}
        errors={errors}
        onSubmit={onSubmit}
        disabled={formDisabled}
        members={members}
      />
    </div>
  );
}

export default App;
