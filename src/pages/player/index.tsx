import React from 'react'
import {
  HomeIcon,
  HamburgerMenuIcon,
  GearIcon,
  Cross1Icon,
} from '@radix-ui/react-icons'
import { Box, Text, Section, Container } from '../../../packages/react'
import { SideBar } from '../../components/sideBar/SideBar'
import { SideBarItem } from '../../components/sideBar/SideBarItem'
import { SideBarMenu } from '../../components/sideBar/SideBarMenu'
import { SideBarSubMenu } from '../../components/sideBar/SideBarSubMenu'

import { styled, css } from '../../../packages/web/src'
import { useState } from 'react'

import ReactPlayer from 'react-player/lazy'

const Main = styled('section', {
  minHeight: '100vh',
  background: 'url(assets/img/bg-space.jpg)no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const TriangleDow = () => (
  <svg
    className="triangle-dow"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
  </svg>
)
TriangleDow.toString = () => '.triangle-dow'

const SideBarItemLink = styled('a', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  color: '#FFFFFF',
  fontSize: '$lg',
  textDecoration: 'none',
  padding: '$1 $2',
  lineHeight: '60px',

  '&:hover': {
    background: '$pink8',
    transition: '0.3s ease',
  },

  '& svg': {
    marginRight: '$2',
  },

  [`& ${Text}`]: {
    color: 'inherit',
  },

  [`& ${TriangleDow}`]: {
    position: 'absolute',
    right: '0',
  },

  variants: {
    submenu: {
      true: {
        paddingLeft: '$10',
      },
    },
  },
})

const NavIcon = styled('a', {
  cursor: 'pointer',
  color: '$hiContrast',
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  '& svg': {
    height: '32px',
    width: '32px',
  },
})

const PlayWrapper = styled('div', {
  position: 'relative',
  paddingTop: '56.25%',
})

const playerReact = css({
  position: 'absolute',
  top: 0,
  left: 0,
})

export default function Home() {
  const [sidebar, setSidebar] = useState(false)

  const showSideBar = () => setSidebar(!sidebar)

  return (
    <Box>
      <Main>
        <Section
          css={{
            background: 'rgba(0, 0, 0, 0.7)',
            height: 80,
          }}
        >
          <Container
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              background: '$loContrast',
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <NavIcon onClick={showSideBar}>
              <HamburgerMenuIcon />
            </NavIcon>

            <Text>Welcome</Text>
          </Container>
        </Section>

        <SideBar show={sidebar}>
          <NavIcon
            onClick={showSideBar}
            css={{
              position: 'fixed',
              top: '$3',
              right: '$4',
            }}
          >
            <Cross1Icon />
          </NavIcon>
          <SideBarMenu>
            <SideBarItem>
              <SideBarItemLink>
                <HomeIcon />
                Dashboard
              </SideBarItemLink>
            </SideBarItem>
            <SideBarItem>
              <SideBarItemLink>
                <GearIcon />
                Link 2
                <TriangleDow />
              </SideBarItemLink>
              <SideBarSubMenu>
                <SideBarItemLink submenu>Sub-link 1</SideBarItemLink>
              </SideBarSubMenu>
              <SideBarSubMenu>
                <SideBarItemLink submenu>Sub-link 2</SideBarItemLink>
              </SideBarSubMenu>
              <SideBarSubMenu>
                <SideBarItemLink submenu>Sub-link 3</SideBarItemLink>
              </SideBarSubMenu>
            </SideBarItem>
            <SideBarItem>
              <SideBarItemLink>
                <HomeIcon />
                Link 3
              </SideBarItemLink>
            </SideBarItem>
            <SideBarItem>
              <SideBarItemLink>
                <HomeIcon />
                Link 4
                <TriangleDow />
              </SideBarItemLink>
              <SideBarSubMenu>
                <SideBarItemLink submenu>Sub-link 1B</SideBarItemLink>
              </SideBarSubMenu>
              <SideBarSubMenu>
                <SideBarItemLink submenu>Sub-link 2B</SideBarItemLink>
              </SideBarSubMenu>
            </SideBarItem>
            <SideBarItem>
              <SideBarItemLink>
                <HomeIcon />
                Link 5
              </SideBarItemLink>
            </SideBarItem>
          </SideBarMenu>
        </SideBar>

        <Container>
          <Text variant="contrast">Ola</Text>
          <PlayWrapper>
            <ReactPlayer
              className={playerReact()}
              url="https://player.vimeo.com/video/"
              width="100%"
              height="100%"
              config={{
                vimeo: {
                  playerOptions: {
                    id: 682745226,
                    controls: true,
                    autoplay: true,
                    dnt: true,
                    title: true,
                    transparent: false,
                  },
                },
              }}
            />
          </PlayWrapper>
        </Container>

        <Container>
          <Text variant="contrast">Ola</Text>
          <PlayWrapper>
            <ReactPlayer
              className={playerReact()}
              url="https://www.youtube.com/watch?v=zNchtTAEhoE"
              width="100%"
              height="100%"
            />
          </PlayWrapper>
        </Container>
      </Main>
    </Box>
  )
}
