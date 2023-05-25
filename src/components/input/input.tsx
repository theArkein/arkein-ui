import React from 'react';

export interface InputProps {
  placeholder?: string
  value?: string
  disabled?: boolean
  onChange?: () => void
  type?: string
}

export const Input = ({ placeholder, value, disabled }: InputProps) => {
	return (
		<input placeholder={placeholder} value={value} disabled={disabled} />
	);
};
