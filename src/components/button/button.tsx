
import React from 'react';
import { CSS } from '@stitches/react';
import { configedStyled } from '../../config/stitches/index.config';
import { ColorSchemeOptions, RoundedOptions, SizeOptions } from '../../config/stitches/variants-options.types';

const StyledButton = configedStyled("button", {
  cursor: "pointer",
  height: "max-content",
  variants:{
    colorScheme: {
      primary: {
        colorScheme: "primary"
      },
      secondary: {
        colorScheme: "secondary"
      },
      success: {
        colorScheme: "success"
      },
      danger: {
        colorScheme: "danger"
      },
    },
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
    outlined: {
      true: {
        border: "2px solid",
        background: 'none',
        "&:hover":{
          background: 'none',
        } 
      },
      false: {
        border: "none",
      }
    },
    disabled: {
      true: {
        cursor: "not-allowed"
      },
      false: {
        cursor: "pointer"
      }
    }
  },
  defaultVariants: {
    colorScheme: "primary",
    size: "base",
    rounded: "base",
    outlined: "false",
    disabled: "false"
  }
})

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
   /**
   * Visible text for the button component
   */
  label: string;
  /**
   * How large should be the button component
   */
  size?: SizeOptions
   /**
   * What color shceme should button component adopt
   */
  colorScheme?: ColorSchemeOptions
   /**
   * Should the button component have rounded corners
   */
  rounded?: RoundedOptions
   /**
   * Should the button be outlined or filled
   */
   outlined?: boolean
   /**
   * Should button component be disbaled
   */
  disabled?: boolean
}

export const Button = ({ label, disabled=false, rounded="base", outlined=false, colorScheme="primary", size="base", ...props }: ButtonProps) => {
	return (
	  <StyledButton size={size} outlined={outlined} rounded={rounded} colorScheme={colorScheme} disabled={disabled} {...props}>{label}</StyledButton>
	);
};
