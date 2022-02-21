const baseColors = {
  'ewm-pink-light': '#c642f7',
  'ewm-pink-mid': '#C721FF',
  'ewm-pink-dark': '#ab33d7',
  'ewm-pink-low': '#322038',

  'ewm-blue-light': '#60c0fe',
  'ewm-blue-mid': '#1aa5fe',
  'ewm-blue-dark': '#168bd7',
  'ewm-blue-low': '#072940',

  'violet-light': '#996DFF',
  'violet-mid': '#8257E5',
  'violet-dark': '#633BBC',
  'violet-low': '#271A45',

  'blue-light': '#6A80FF',
  'blue-mid': '#4863F7',
  'blue-dark': '#3249CB',
  'blue-low': '#182049',

  'green-light': '#00B37E',
  'green-mid': '#00875F',
  'green-dark': '#015F43',
  'green-low': '#00291D',

  'red-light': '#FC4737',
  'red-mid': '#D73628',
  'red-dark': '#AD1E12',
  'red-low': '#42110D',

  'success-light': '#04D361',
  'success-base': '#1B873F',
  'success-low': '#051B0D',

  'danger-light': '#F75A68',
  'danger-base': '#CC2937',
  'danger-low': '#2D090C',

  'warning-light': '#FBA94C',
  'warning-base': '#EB8A1D',
  'warning-low': '#2E1B06',

  'yellow-light': '#F7E55A',
  'yellow-base': '#EBD62F',
  'yellow-low': '#2D2909',

  white: '#FFFFFF',
  black: '#000000',

  'grey-100': '#E1E1E6',
  'grey-200': '#C4C4CC',
  'grey-300': '#8D8D99',
  'grey-400': '#7C7C8A',
  'grey-500': '#505059',
  'grey-600': '#323238',
  'grey-700': '#29292E',
  'grey-800': '#202024',
  'grey-900': '#121214',
  'grey-950': '#09090A',
}

const aliases = {
  'text-title': baseColors['grey-100'],
  'text-base': baseColors['grey-200'],
  'text-support': baseColors['grey-300'],

  placeholder: baseColors['grey-400'],
  'inputs-icons': baseColors['grey-500'],
  'shape-tertiary': baseColors['grey-600'],
  'shape-secondary': baseColors['grey-700'],
  'shape-primary': baseColors['grey-800'],
  'color-background': baseColors['grey-900'],

  hiContrast: baseColors['white'],
  loContrast: baseColors['black'],
  'color-primary': baseColors['ewm-pink-mid'],
  'color-primary-light': baseColors['ewm-pink-light'],
  'color-primary-dark': baseColors['ewm-pink-dark'],
  'color-primary-low': baseColors['ewm-pink-low'],
}

export const colors = { ...baseColors, ...aliases }
