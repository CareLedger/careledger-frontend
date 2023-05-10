import React from "react";
import { FormControl, FormLabel } from "./date.input.styles";

const FormDateInput = ({
  labelName,
  placeholder,
  width,
  value,
  handleChange,
  name,
}) => {
  return (
    <>
      <FormLabel>{labelName}</FormLabel>
      <FormControl width={width}>
        <input
          type="date"
          className="form-input"
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChange}
          
        />
      </FormControl>
    </>
  );
};

export default FormDateInput;