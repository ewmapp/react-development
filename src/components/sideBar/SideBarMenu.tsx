import React, { forwardRef } from 'react'
import { styled } from '../../../packages/web/src'
import { SideBarMenu as SideBarMenuCSS } from '../../../packages/styles/'

const StyleSideBarMenu = styled('div', SideBarMenuCSS)

export type SideBarMenuProps = React.ComponentProps<typeof StyleSideBarMenu> &
  React.HTMLAttributes<typeof StyleSideBarMenu>

export const SideBarMenu = forwardRef<
  React.ElementRef<typeof StyleSideBarMenu>,
  SideBarMenuProps
>(({ children, ...props }, forwardRef) => {
  return (
    <StyleSideBarMenu ref={forwardRef} {...props}>
      {children}
    </StyleSideBarMenu>
  )
})

SideBarMenu.displayName = 'SideBarMenu'
