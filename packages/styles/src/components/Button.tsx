import { css } from '../../../web/src'

export const ButtonLabel = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > * + *': {
    marginLeft: '$3',
  },
})

ButtonLabel.toString = () => `.${ButtonLabel.className}`

export const ButtonLoading = css({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Button = css({
  // Reset
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  border: '1px solid transparent',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$bold',
  cursor: 'pointer',
  transition: 'background 0.2s ease 0s, box-shadow 0.2s ease 0s',

  variants: {
    variant: {
      solid: {
        backgroundColor: '$color-primary',
        color: '$hiContrast',
        '&:hover': {
          backgroundColor: '$color-primary-light',
        },
      },
      soft: {
        backgroundColor: '$shape-secondary',
        color: '$hiContrast',
        '&:hover': {
          backgroundColor: '$shape-tertiary',
        },
      },
      ghost: {
        backgroundColor: 'transpatent',
        color: '$hiContrast',
        '&:hover': {
          backgroundColor: '$shape-tertiary',
        },
      },
      danger: {
        backgroundColor: '$shape-secondary',
        color: '$danger-light',
        '&:hover': {
          backgroundColor: '$shape-tertiary',
        },
      },
      link: {
        backgroundColor: 'transpatent',
        color: '$color-primary',
        '&:hover': {
          color: '$color-primary-light',
          backgroundColor: 'transpatent',
        },
      },
    },
    size: {
      sm: {
        height: '$8',
        padding: '0 $4',
        fontsize: '$xs',
      },
      md: {
        height: '$10',
        padding: '0 $6',
      },
      lg: {
        height: '$12',
        padding: '0 $8',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: '$medium',
      },
    },
    outlined: {
      true: {},
    },
    loading: {
      true: {
        [`& ${ButtonLabel}`]: {
          visibility: 'hidden',
        },
      },
    },
  },

  compoundVariants: [
    {
      variant: 'solid',
      outlined: true,
      css: {
        background: 'none',
        borderColor: '$color-primary',
        '&:hover': {
          color: '$hiContrast',
        },
      },
    },
    {
      variant: 'solid',
      outlined: true,
      disabled: true,
      css: {
        background: 'none',
        borderColor: '$color-primary',
        '&:hover': {
          background: 'none',
        },
      },
    },
    {
      variant: 'soft',
      outlined: true,
      css: {
        background: 'none',
        borderColor: '$shape-secondary',
      },
    },
    {
      variant: 'soft',
      outlined: true,
      disabled: true,
      css: {
        background: 'none',
        borderColor: '$shape-secondary',
        '&:hover': {
          background: 'none',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'solid',
    size: 'sm',
  },
})
