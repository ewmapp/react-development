/* (eslint@typescript-eslint/no-unsafe-assignment) */
import React from 'react'

import { Box, Container, Text } from '../../packages/react'
import { Header } from '../components/Header'
import { TitleAndMetaTags } from '../components/TitleAndMetaTags'

export default function Teste() {
  return (
    <Box>
      <TitleAndMetaTags title="EWM — Soluções Digitais em Gestão de Eventos" />
      <Box
        css={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'absolute',
          zIndex: -1,
          background:
            'radial-gradient(circle at top left, $violet4, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $cyan4, rgba(255, 255, 255, 0) 15%)',
          '@bp2': {
            background:
              'radial-gradient(circle at 15% 50%, $violet4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $cyan4, rgba(255, 255, 255, 0) 25%)',
          },
        }}
      />

      <Header />
      <Container>
        <Text>Olá Mundão sem fronteiras</Text>
      </Container>
    </Box>
  )
}
