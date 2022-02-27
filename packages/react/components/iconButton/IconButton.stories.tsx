import { Story, Meta } from '@storybook/react'
import React from 'react'
import { PersonIcon } from '@radix-ui/react-icons'

import { IconButton, IconButtonProps } from './IconButton'

export default {
  title: 'Form/IconButton',
  component: IconButton,
  argTypes: {
    css: { table: { disabled: true } },
    variant: {
      options: ['solid', 'soft', 'ghost'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: { control: { type: 'boolean' } },
    outlined: { control: { type: 'boolean' } },
  },
  args: {
    variant: 'solid',
    size: 'md',
    disabled: false,
    outlined: false,
  },
} as Meta

const Template: Story<IconButtonProps> = args => (
  <IconButton {...args}>
    <PersonIcon />
  </IconButton>
)

export const Solid = Template.bind({})

export const Soft = Template.bind({})
Soft.args = { variant: 'soft' }

export const Ghost = Template.bind({})
Ghost.args = { variant: 'ghost' }

export const Outlined = Template.bind({})
Outlined.args = { outlined: true }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
