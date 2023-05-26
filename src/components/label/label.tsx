import React from 'react'
import { configedStyled } from '../../config/stitches/index.config'
import { ColorSchemeOptions, SizeOptions } from '../../config/stitches/variants-options.types'

export interface LabelProps  {
    /**
    * Text to be displayed as label
    */
    text: string;
    /**
     * Id of input element that this label is associated
    */
    htmlFor: string;
    /**
     * Text color of the label component
    */
    color?: ColorSchemeOptions;
    /**
     * Font size of the label component
    */
    size?: SizeOptions;
     /**
     * Font weight of the label component
    */
     bold?: boolean;
}

const StyledLabel = configedStyled("label", {
    width: "fit-content",
    cursor: 'pointer',
    variants: {
        color: {
            primary: {
                color: "$primary11"
            },
            secondary: {
                color: "$secondary11"
            },
            success: {
                color: "$success11"
            },
            danger: {
                color: "$danger11"
            }
        },
        size: {
            sm: {
                fontSize: "$sm"
            },
            base: {
                fontSize: "$base"
            },
            lg: {
                fontSize: "$lg"
            }
        },
        bold: {
            true: {
                fontWeight: "$bold"
            }
        }
    },
    defaultVariants: {
        size: "base",
    }
})

const Label = ({text, htmlFor, color, size, bold }: LabelProps) => {
  return (
    <StyledLabel color={color} size={size} htmlFor={htmlFor} bold={bold} >{text}</StyledLabel>
  )
}

export default Label