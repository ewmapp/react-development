import { Story, Meta } from '@storybook/react'
import React from 'react'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LockClosedIcon,
  PersonIcon,
} from '@radix-ui/react-icons'

import { Button, ButtonProps } from './Button'

const iconArgType = {
  options: ['noIcon', 'Person', 'ArrowLeft', 'ArrowRight', 'LockClosed'],
  mapping: {
    noIcon: null,
    Person: <PersonIcon />,
    ArrowLeft: <ArrowLeftIcon />,
    ArrowRight: <ArrowRightIcon />,
    LockClosed: <LockClosedIcon />,
  },
  control: { type: 'select', labels: { noIcon: 'No icon' } },
}

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    css: { table: { disabled: true } },
    children: { control: { type: 'text' } },
    variant: {
      options: [
        'solid',
        'soft',
        'ghost',
        'link',
        'light',
        'dark',
        'success',
        'danger',
      ],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: { control: { type: 'boolean' } },
    outlined: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    leftIcon: iconArgType,
    rightIcon: iconArgType,
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

export const Light = Template.bind({})
Light.args = { variant: 'light' }

export const Dark = Template.bind({})
Dark.args = { variant: 'dark' }

export const Success = Template.bind({})
Success.args = { variant: 'success' }

export const Danger = Template.bind({})
Danger.args = { variant: 'danger' }

export const Outlined = Template.bind({})
Outlined.args = { outlined: true }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
