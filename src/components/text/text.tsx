import React from 'react'
import { configedStyled } from '../../config/stitches/index.config'
import { ColorSchemeOptions, SizeOptions } from '../../config/stitches/variants-options.types'

export interface LabelProps  {
    /**
    * Text to be displayed as component's content
    */
    content: string;
    /**
     * Text color of the label component
    */
    color?: ColorSchemeOptions;
    /**
     * Font size of the label component
    */
    size?: SizeOptions;
}

const StyledLabel = configedStyled("span", {
    margin: "0",
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
        }
    },
    defaultVariants: {
        size: "base",
        color: "secondary"
    }
})

const Text = ({content, color, size}: LabelProps) => {
  return (
    <StyledLabel color={color} size={size} >{content}</StyledLabel>
  )
}

export default Text