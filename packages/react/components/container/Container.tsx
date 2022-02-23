import { Container as ContainerCSS } from '../../../styles/index'
import { styled } from '../../../web/src'
import React from 'react'

const StyleContainer = styled('div', ContainerCSS)

export type ContainerProps = {
  children?: React.ReactNode
}

export const Container = ({ children, ...props }: ContainerProps) => {
  return <StyleContainer {...props}>{children}</StyleContainer>
}

Container.displayName = 'Container'
