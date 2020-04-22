import React from "react";

function Form(props) {
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    ////////// NEW PROPS FOR TODAY //////////
    disabled,
    errors,
  } = props;
  return (
    <form>
      <label>
        <input
          onChange={onInputChange}
          name="name"
          type="text"
          placeholder="Name"
          value={values.name}
        />
        {errors.name}
      </label>
      <label>
        <input
          onChange={onInputChange}
          name="email"
          type="text"
          placeholder="Email@email.com"
          value={values.email}
        />
        {errors.email}
      </label>
      <label>
        <input
          onChange={onInputChange}
          name="password"
          type="text"
          placeholder="Password"
          value={values.password}
        />
        {errors.password}
      </label>
      <label>
        <input
          onChange={onInputChange}
          name="terms"
          type="checkbox"
          value={values.terms}
        />
        Terms of Service
      </label>
      <label>
        <button> Submit me </button>
      </label>
    </form>
  );
}

export default Form;
