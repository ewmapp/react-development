import React, { forwardRef } from 'react'
import { styled } from '../../../packages/web/src'
import { SideBarSubMenu as SideBarSubMenuCSS } from '../../../packages/styles/'

const StyleSideBarSubMenu = styled('div', SideBarSubMenuCSS)

export type SideBarSubMenuProps = React.ComponentProps<
  typeof StyleSideBarSubMenu
> &
  React.HTMLAttributes<typeof StyleSideBarSubMenu>

export const SideBarSubMenu = forwardRef<
  React.ElementRef<typeof StyleSideBarSubMenu>,
  SideBarSubMenuProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleSideBarSubMenu ref={forwardRef} {...props}>
      {children}
    </StyleSideBarSubMenu>
  )
})

SideBarSubMenu.displayName = 'SideBarSubMenu'
