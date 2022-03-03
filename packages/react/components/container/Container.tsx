import { Container as ContainerCSS } from '../../../styles/index'
import { styled } from '../../../web/src'
import React, { forwardRef } from 'react'

const StyleContainer = styled('div', ContainerCSS)

export type ContainerProps = React.ComponentProps<typeof StyleContainer> &
  React.HTMLAttributes<typeof StyleContainer>

export const Container = forwardRef<
  React.ElementRef<typeof StyleContainer>,
  ContainerProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleContainer ref={forwardRef} {...props}>
      {children}
    </StyleContainer>
  )
})

Container.displayName = 'Container'
