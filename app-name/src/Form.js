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
    members,
  } = props;
  return (
    <form>
      <label>
        <input
          onChange={onInputChange}
          name="first_name"
          type="text"
          placeholder="Name"
          value={values.first_name}
        />
        {errors.first_name}
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
          onChange={onCheckboxChange}
          name="terms"
          type="checkbox"
          value={values.terms}
        />
        Terms of Service
        {errors.terms}
      </label>

      <label>
        <button onClick={onSubmit} disabled={disabled}>
          {" "}
          Submit me{" "}
        </button>
      </label>
      <p>
        {" "}
        {members.map((item) => {
          return (
            <div>
              <h2>{item.first_name} </h2>
              <h3>{item.email}</h3>
              <h3>{item.password}</h3>
            </div>
          );
        })}
      </p>
    </form>
  );
}

export default Form;
