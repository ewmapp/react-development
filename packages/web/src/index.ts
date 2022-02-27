/* import { colors as defaultColors } from '../../colors/src' */
import {
  slate,
  slateDark,
  pink,
  pinkDark,
  red,
  redDark,
  green,
  greenDark,
  slateA,
  slateDarkA,
  whiteA,
  blackA,
} from '@radix-ui/colors'
import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },
  theme: {
    colors: {
      ...slate,
      ...slateA,
      ...red,
      ...pink,
      ...green,
      ...whiteA,
      ...blackA,

      bgColor: '$slate1',
      hiContrast: '$slate1',
      loContrast: '$slate12',

      // Theme Component Color
      loPrimary: '$pink11',
      hiPrimary: '$pink12',
      bgPrimary: '$pink1',

      loSecondary: '$slate5',

      // Theme Component Background
      hiBgPrimary: '$pink5',
      miBgPrimary: '$pink4',
      loBgPrimary: '$pink3',

      // Theme Component Border
      hiBdPrimary: '$pink8',
      miBdPrimary: '$pink7',
      loBdPrimary: '$pink6',

      // Theme Component Solid
      hiSoPrimary: '$pink9',
      loSoPrimary: '$pink10',

      hiBgSecondary: '$slateA9',
      miBgSecondary: '$slateA10',
      loBgSecondary: '$slateA11',

      loTransparent: 'rgba(255,255,255,0.5)',
    },

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },

    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem',
    },

    fonts: {
      default: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      highlight: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      reading: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      code: 'Söhne Mono, menlo, monospace',
    },

    fontWeights: {
      regular: 'regular',
      medium: 'medium',
      bold: 'bold',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    borderWidths: {
      thin: '1px',
      medium: '1.5px',
      thick: '2px',
      heavy: '4px',
    },

    radii: {
      xs: '2.5px',
      sm: '5px',
      md: '10px',
      lg: '20px',
      full: '99999px',
    },

    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '75%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%',
    },

    zIndices: {
      overlay: 9995,
      modal: 9999,
    },
  },

  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
  },

  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...slateDarkA,
    ...slateDark,
    ...redDark,
    ...pinkDark,
    ...greenDark,
    ...whiteA,
    ...blackA,

    bgColor: '$slate1',
    hiContrast: '$slate1',
    loContrast: '$slate12',

    // Theme Component Color
    loPrimary: '$pink11',
    hiPrimary: '$pink12',
    bgPrimary: '$pink1',

    loSecondary: '$slate11',

    // Theme Component Background
    hiBgPrimary: '$pink5',
    miBgPrimary: '$pink4',
    loBgPrimary: '$pink3',

    // Theme Component Border
    hiBdPrimary: '$pink8',
    miBdPrimary: '$pink7',
    loBdPrimary: '$pink6',

    // Theme Component Solid
    hiSoPrimary: '$pink9',
    loSoPrimary: '$pink10',

    hiBgSecondary: '$slateA5',
    miBgSecondary: '$slateA4',
    loBgSecondary: '$slateA3',

    loTransparent: 'rgba(0,0,0,0.5)',
  },
})

/* export type { VariantProps } from '@stitches/react'
export type CSS = Stitches.CSS<typeof config> */
