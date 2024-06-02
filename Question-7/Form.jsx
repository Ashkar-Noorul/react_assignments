import React, { useState } from "react";

const Form = ({ onChangeName }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeName(name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
