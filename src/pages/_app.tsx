import React from 'react'
import type { AppProps } from 'next/app'

import { globalCss } from '../../packages/web/src'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  body: {
    backgroundColor: '$color-background',
  },
})

function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}

export default App
