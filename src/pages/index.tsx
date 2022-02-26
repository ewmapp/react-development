/* (eslint@typescript-eslint/no-unsafe-assignment) */
import React from 'react'
import Head from 'next/head'
import { Box } from '../../packages/react/components/box/Box'
import { Container } from '../../packages/react/components/container/Container'
import { Button } from '../../packages/react/components/button/Button'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

/* const icone = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
} */

export default function Home() {
  return (
    <Box>
      <Head>
        <title>My page title</title>
      </Head>

      <Container>
        <h3>Theme Buttons</h3>
        <hr />
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: '10px 20px',
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
          justifyContent: 'space-around',
          padding: '10px 20px',
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
        <h3>Default Buttons</h3>
        <hr />
      </Container>

      <Container
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: '10px 20px',
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
          justifyContent: 'space-around',
          padding: '10px 20px',
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
          justifyContent: 'space-around',
          padding: '10px 20px',
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
    </Box>
  )
}
