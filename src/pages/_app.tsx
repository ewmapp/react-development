import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { globalCss, darkTheme } from '../../packages/web/src'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  body: {
    backgroundColor: '$bgColor',
    fontFamily: '$default',
  },
})

function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
