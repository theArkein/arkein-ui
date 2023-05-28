
import React from 'react';
import { CSS } from '@stitches/react';
import { configedStyled } from '../../config/stitches/index.config';
import { RoundedOptions, SizeOptions } from '../../config/stitches/variants-options.types';

const StyledSelect = configedStyled("select", {
  cursor: "pointer",
  height: "max-content",
  variants:{
    size: {
      lg: {
        padding: "8px 16px",
        fontSize: "20px"
      },
      base: {
        padding: "6px 12px",
        fontSize: "16px"
      },
      sm: {
        padding: "4px 8px",
        fontSize: "12px"
      }
    },
    rounded: {
      sm: {
        borderRadius: "$sm"
      },
      base: {
        borderRadius: "$base"
      },
      lg: {
        borderRadius: "$lg"
      },
      full: {
        borderRadius: "$full"
      }
    }
  },
  defaultVariants: {
    size: "base",
    rounded: "base",
  }
})

export interface SelectOption {
    label: string,
    value: any
  }

export interface SelectProps extends Omit<React.ComponentPropsWithoutRef<"select">,"size"> {
   /**
   * Visible text for the button component
   */
  label: string;
  /**
   * How large should be the button component
   */
  size?: SizeOptions
   /**
   * Should the button component have rounded corners
   */
  rounded?: RoundedOptions
    /**
   * Select options for the component
   */
  options: SelectOption[]

}

export const Select = ({ label, onClick, disabled=false, rounded, size, options, ...props }: SelectProps) => {
	const optionsList = options.map(option=>(
        <option role="listitem" key={option.value} value={option.value}>{option.label}</option>
    ))
    return (
		<StyledSelect size={size} rounded={rounded} {...props} role="listbox">
      <option disabled role="listitem">{label}</option>
      {optionsList}
    </StyledSelect>
	);
};
