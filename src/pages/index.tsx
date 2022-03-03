/* (eslint@typescript-eslint/no-unsafe-assignment) */
import React from 'react'
import Head from 'next/head'
import { Box } from '../../packages/react/components/box/Box'
import { Container } from '../../packages/react/components/container/Container'
import { Button } from '../../packages/react/components/button/Button'
import { IconButton } from '../../packages/react/components/iconButton/IconButton'
import { SunIcon, PersonIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Text } from '../../packages/react/components/text/Text'

export default function Teste() {
  const { theme, setTheme } = useTheme()
  return (
    <Box>
      <Head>
        <title>My page of test</title>
      </Head>

      <Container css={{ padding: '40px 20px' }}>
        <IconButton
          variant="ghost"
          size="sm"
          onClick={() =>
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }
        >
          <SunIcon />
        </IconButton>
        <Text size="9xl" variant="pink" gradient>
          Olá Mundo
        </Text>
      </Container>

      <Container>
        <h3>Theme Buttons</h3>
        <hr />
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <Button variant="solid">SOLID</Button>
        <Button variant="solid" disabled>
          SOLID
        </Button>
        <Button variant="soft">SOFT</Button>
        <Button variant="soft" disabled>
          SOFT
        </Button>
        <Button variant="ghost">GHOST</Button>
        <Button variant="ghost" disabled>
          GHOST
        </Button>
        <Button variant="link">LINK</Button>
        <Button variant="link" disabled>
          LINK
        </Button>
      </Container>

      <Container css={{ marginTop: 40 }}>
        <h3>Theme Buttons Outline</h3>
        <hr />
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <Button variant="solid" outlined>
          SOLID
        </Button>
        <Button variant="solid" outlined disabled>
          SOLID
        </Button>
        <Button variant="soft" outlined>
          SOFT
        </Button>
        <Button variant="soft" outlined disabled>
          SOFT
        </Button>
        <Button variant="ghost" outlined>
          GHOST
        </Button>
        <Button variant="ghost" outlined disabled>
          GHOST
        </Button>
        <Button variant="link">LINK</Button>
        <Button variant="link" outlined disabled>
          LINK
        </Button>
      </Container>

      <Container css={{ marginTop: 40 }}>
        <h3>Theme Buttons Icons</h3>
        <hr />
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <IconButton size="lg">
          <PersonIcon />
        </IconButton>

        <IconButton size="md">
          <PersonIcon />
        </IconButton>

        <IconButton size="sm">
          <PersonIcon />
        </IconButton>
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <IconButton size="lg" outlined>
          <PersonIcon />
        </IconButton>

        <IconButton size="md" outlined>
          <PersonIcon />
        </IconButton>

        <IconButton size="sm" outlined>
          <PersonIcon />
        </IconButton>
      </Container>

      <Container css={{ marginTop: 40 }}>
        <h3>Default Buttons</h3>
        <hr />
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <Button variant="light">LIGHT</Button>
        <Button variant="light" disabled>
          LIGHT
        </Button>
        <Button variant="light" outlined>
          LIGHT
        </Button>
        <Button variant="light" outlined disabled>
          LIGHT
        </Button>
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <Button variant="dark">DARK</Button>
        <Button variant="dark" disabled>
          DARK
        </Button>
        <Button variant="dark" outlined>
          DARK
        </Button>
        <Button variant="dark" outlined disabled>
          DARK
        </Button>
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <Button variant="success">SUCCESS</Button>
        <Button variant="success" disabled>
          SUCCESS
        </Button>
        <Button variant="success" outlined>
          SUCCESS
        </Button>
        <Button variant="success" outlined disabled>
          SUCCESS
        </Button>
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <Button variant="danger">DANGER</Button>
        <Button variant="danger" disabled>
          DANGER
        </Button>
        <Button variant="danger" outlined>
          DANGER
        </Button>
        <Button variant="danger" outlined disabled>
          DANGER
        </Button>
      </Container>

      <Container css={{ marginTop: 40 }}>
        <h3>Default Buttons Icons</h3>
        <hr />
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <IconButton size="lg" variant="soft">
          <PersonIcon />
        </IconButton>

        <IconButton size="md" variant="soft">
          <PersonIcon />
        </IconButton>

        <IconButton size="sm" variant="soft">
          <PersonIcon />
        </IconButton>
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 20px',
          marginBottom: 100,
          '& > * + *': { marginLeft: '10px' },
        }}
      >
        <IconButton size="lg" variant="ghost">
          <PersonIcon />
        </IconButton>

        <IconButton size="md" variant="ghost">
          <PersonIcon />
        </IconButton>

        <IconButton size="sm" variant="ghost">
          <PersonIcon />
        </IconButton>
      </Container>
    </Box>
  )
}
