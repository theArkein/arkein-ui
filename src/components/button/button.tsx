import React from 'react';

export interface ButtonProps {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({ label, onClick, disabled }: ButtonProps) => {
	return (
		<button onClick={onClick} disabled={disabled}>{label}</button>
	);
};
