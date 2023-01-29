import { InputHTMLAttributes } from "react";
import React from "react";
import { Input, FormInputLabel, Group } from "./form-input.styles.jsx";

type FormInputProps = {
  label: string,
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
