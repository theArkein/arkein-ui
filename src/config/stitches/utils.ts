import { CSS } from "@stitches/react"
import { ColorSchemeOptions } from "./variants-options.types"

export const colorWithScale = (color: string,scale: number)=>`$${color}${scale}`

export const getColorSceheme = (color: ColorSchemeOptions)=>{
    const _colorWithScale = (scale:number)=> colorWithScale(color,scale)
    const scheme: CSS = {
              backgroundColor: _colorWithScale(3),
              color: _colorWithScale(11),
              borderColor: _colorWithScale(7),
              '&:hover': {
                backgroundColor: _colorWithScale(4),
                borderColor: _colorWithScale(8),
              },
            }
      return scheme
}