import React, { forwardRef } from 'react'
import { styled } from '../../../packages/web/src'
import { SideBar as SideBarCSS } from '../../../packages/styles/'

const StyleSideBar = styled('div', SideBarCSS)

export type SideBarProps = React.ComponentProps<typeof StyleSideBar> &
  React.HTMLAttributes<typeof StyleSideBar>

export const SideBar = forwardRef<
  React.ElementRef<typeof StyleSideBar>,
  SideBarProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleSideBar ref={forwardRef} {...props}>
      {children}
    </StyleSideBar>
  )
})

SideBar.displayName = 'SideBar'
