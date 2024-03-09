import React, { ChangeEvent } from 'react';

type InputProps = {
  value: string;
  type: 'text';
  onChange: (value: string) => void;
}

export function FormComponent({value, type, onChange}: InputProps) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input type={type} value={value} onChange={handleChange} />
  );
}
