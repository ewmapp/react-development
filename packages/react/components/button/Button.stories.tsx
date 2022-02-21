import { Story, Meta } from '@storybook/react'
import React from 'react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    css: { table: { disabled: true } },
    children: { control: { type: 'text' } },
    variant: {
      options: ['solid', 'soft', 'ghost', 'danger', 'link'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: { control: { type: 'boolean' } },
    outlined: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
  },
  args: {
    children: 'LABEL',
    variant: 'solid',
    size: 'md',
    disabled: false,
    outlined: false,
    loading: false,
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Solid = Template.bind({})

export const Soft = Template.bind({})
Soft.args = { variant: 'solid' }

export const Ghost = Template.bind({})
Ghost.args = { variant: 'ghost' }

export const Link = Template.bind({})
Link.args = { variant: 'link' }

export const Danger = Template.bind({})
Danger.args = { variant: 'danger' }

export const Outlined = Template.bind({})
Outlined.args = { outlined: true }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
