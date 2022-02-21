import { css, keyframes } from '../../../web/src'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Spinner = css({
  display: 'block',
  position: 'relative',
  boxSizing: 'border-box',
  border: '2px solid $colors$white',
  borderRadius: '50%',
  borderTop: '2px solid rgba(255,255,255,0.5)',
  width: '16px',
  height: '16px',
  animation: `${spin} 0.6s linear 0s infinite normal none`,

  '&::before': {
    content: '',
    boxSizing: 'inherit',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    borderRightColor: 'transparent',
  },

  '&::after': {
    content: '',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: '$colors$grey-200',
    opacity: '$medium',
  },
})
