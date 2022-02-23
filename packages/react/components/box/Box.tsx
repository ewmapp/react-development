import { Box as BoxCSS } from '../../../styles/index'
import { styled } from '../../../web/src'
import React, { forwardRef } from 'react'

const StyleBox = styled('div', BoxCSS)

export type BoxProps = React.ComponentProps<typeof StyleBox>

export const Box = forwardRef<React.ElementRef<typeof StyleBox>, BoxProps>(
  ({ children, ...props }, forwardRef) => {
    return <StyleBox>{children}</StyleBox>
  }
)

Box.displayName = 'Box'
