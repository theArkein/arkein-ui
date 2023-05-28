import React from 'react';
import { ColorSchemeOptions, RoundedOptions, SizeOptions } from '../../config/stitches/variants-options.types';
import { configedStyled } from '../../config/stitches/index.config';
import Label from '../label/label';
import { Text } from '../text';
import { CSS } from '@stitches/react';

export interface InputProps extends Omit<React.ComponentPropsWithoutRef<"input">,"size"> {
   /**
  * Label text for the input component
  */
   label?: string
  /**
  * Placeholder text for the input component
  */
  placeholder?: string
  /**
   * How large should be the input component
  */
  size?: SizeOptions
  /**
   * Should the button component have rounded corners
   */
  rounded?: RoundedOptions
  /**
   * Is input value invalid
   */
  invalid?: boolean
   /**
   * If invalid input value, display error message
   */
   error?: string
  /**
   * Should the input component be lined or outlined
   */
   lined?: boolean
   /**
   * Unique id for the input element
   */
   id?: string
}

const StyledInput = configedStyled("input", {
  outline: "none",
  border: "none",
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
    },
    lined: {
      true: {
        borderBottom: "2px solid $secondary8",
        '&:focus': {
          borderBottom: "2px solid $primary8",
        },
      },
      false: {
        border: "2px solid $secondary8",
        '&:focus': {
          border: "2px solid $primary8",
        },
      }
    },
    invalid:{
      true: {
        borderColor: "$danger8",
        '&:focus': {
          borderColor: "$danger8",
        },
      }
    },
  },
  defaultVariants: {
    size: "base",
    lined: "false",
    invalid: "false"
  }
})

const Container = configedStyled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  width: "100%"
})


export const Input = ({id='', label, placeholder, rounded, lined=false, invalid=false, error="Invalid input", size="base", ...props }: InputProps) => {
	return (
    <Container>
      {
        label && (
          <Label color={"secondary"} size={size} htmlFor={id} text={label} bold />
        )
      }
      <StyledInput id={id} invalid={invalid} size={size} lined={lined} type="text" rounded={rounded} placeholder={placeholder} {...props} />
      {
        (invalid && error) && (
          <Text content={error} color={"danger"} size={"sm"} />
        )
      }
    </Container>
	
		);
};
