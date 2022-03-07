import { css } from '../../../web/src'

export const Text = css({
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      xxs: {
        fontSize: '$xxs',
      },
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
      '4xl': {
        fontSize: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
      },
      '6xl': {
        fontSize: '$6xl',
      },
      '7xl': {
        fontSize: '$7xl',
      },
      '8xl': {
        fontSize: '$8xl',
      },
      '9xl': {
        fontSize: '$9xl',
      },
    },
    variant: {
      red: {
        color: '$red11',
      },
      pink: {
        color: '$pink11',
      },
      purple: {
        color: '$purple11',
      },
      blue: {
        color: '$blue11',
      },
      green: {
        color: '$green11',
      },
      yellow: {
        color: '$yellow11',
      },
      orange: {
        color: '$orange11',
      },
      contrast: {
        color: '$loContrast',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'red',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $red11, $crimson11)',
      },
    },
    {
      variant: 'pink',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $pink11, $purple11)',
      },
    },
    {
      variant: 'purple',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $purple11, $violet11)',
      },
    },
    {
      variant: 'blue',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $blue11, $cyan11)',
      },
    },
    {
      variant: 'green',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $green11, $lime11)',
      },
    },
    {
      variant: 'yellow',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $yellow11, $orange11)',
      },
    },
    {
      variant: 'orange',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $orange11, $red11)',
      },
    },
    {
      variant: 'contrast',
      gradient: 'true',
      css: {
        backgroundImage: 'linear-gradient(to right, $hiContrast, $gray12)',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'contrast',
  },
})
