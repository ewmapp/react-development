import NextLink from 'next/link'
import { Box, Flex, Link, Text } from '../../packages/react'
import { ThemeToggle } from './ThemeToggle'
import { LogoSvg } from './LogoSvg'

export function Header() {
  return (
    <Flex
      as="header"
      css={{
        py: '$4',
        px: '0px',
        jc: 'space-between',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            color: '$hiContrast',
            display: 'inline-flex',
            '&:focus': {
              boxShadow: 'none',
            },
          }}
        >
          <LogoSvg />
        </Box>
      </NextLink>
      <Flex as="nav" css={{ ai: 'center' }}>
        <NextLink href="/docs" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$7' } }}>
            <Text>Docs</Text>
          </Link>
        </NextLink>
        <NextLink href="/player" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$7' } }}>
            <Text>Player</Text>
          </Link>
        </NextLink>
        <Link
          href="https://github.com/modulz/stitches"
          variant="subtle"
          css={{
            mr: '$5',
            display: 'none',
            '@bp1': { display: 'block' },
            '@bp2': { mr: '$7' },
          }}
        >
          <Text>GitHub</Text>
        </Link>
        <Link
          href="https://discord.com/invite/H4eG3Mk"
          variant="subtle"
          css={{ mr: '$5', '@bp2': { mr: '$7' } }}
        >
          <Text>Discord</Text>
        </Link>
        <ThemeToggle />
      </Flex>
    </Flex>
  )
}
