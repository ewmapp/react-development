import { Text as TextCSS } from '../../../styles/index'
import { styled } from '../../../web/src'
import React, { forwardRef } from 'react'

const StyleText = styled('span', TextCSS)

export type TextProps = React.ComponentProps<typeof StyleText> &
  React.HTMLAttributes<typeof StyleText>

export const Text = forwardRef<React.ElementRef<typeof StyleText>, TextProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <StyleText ref={forwardRef} {...props}>
        {children}
      </StyleText>
    )
  }
)

Text.displayName = 'Text'
