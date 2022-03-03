import React, { forwardRef } from 'react'
import { styled } from '../../../packages/web/src'
import { SideBarItem as SideBarItemCSS } from '../../../packages/styles/'

const StyleSideBarItem = styled('div', SideBarItemCSS)

export type SideBarItemProps = React.ComponentProps<typeof StyleSideBarItem> &
  React.HTMLAttributes<typeof StyleSideBarItem>

export const SideBarItem = forwardRef<
  React.ElementRef<typeof StyleSideBarItem>,
  SideBarItemProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleSideBarItem ref={forwardRef} {...props}>
      {children}
    </StyleSideBarItem>
  )
})

SideBarItem.displayName = 'SideBarItem'
