import React from 'react'
import { Text } from '../text/Text'
import { VariantProps, CSS } from '../../../web/src'
import merge from 'lodash.merge'

const DEFAULT_TAG = 'h1'

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type HeadingSizeVariants = 'md' | 'xl' | '4xl' | '6xl'
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: any }

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  // '2' here is the default heading size variant
  const { size = '4xl', ...textProps } = props
  // This is the mapping of Heading Variants to Text variants
  const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
    md: { '@initial': 'md', '@bp2': 'lg' },
    xl: { '@initial': 'xl', '@bp2': '2xl' },
    '4xl': { '@initial': '4xl', '@bp2': '5xl' },
    '6xl': { '@initial': '6xl', '@bp2': '7xl' },
  }

  // This is the mapping of Heading Variants to Text css
  const textCss: Record<HeadingSizeVariants, CSS> = {
    md: { fontWeight: 500, lineHeight: '20px', '@bp2': { lineHeight: '23px' } },
    xl: { fontWeight: 500, lineHeight: '25px', '@bp2': { lineHeight: '30px' } },
    '4xl': {
      fontWeight: 500,
      lineHeight: '33px',
      '@bp2': { lineHeight: '41px' },
    },
    '6xl': {
      fontWeight: 500,
      lineHeight: '35px',
      '@bp2': { lineHeight: '55px' },
    },
  }

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontVariantNumeric: 'proportional-nums',
        ...merge(textCss[size], props.css),
      }}
    />
  )
})

Heading.displayName = 'Heading'
