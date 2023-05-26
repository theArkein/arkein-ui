import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'UI Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
    size: "base",
    colorScheme: "primary",
    rounded: "base",
    outlined: false,
    onClick: ()=>window.alert("Clicked"),
    disabled: false
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    colorScheme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    colorScheme: "secondary",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const Rounded: Story = {
  args: {
    ...Default.args,
    rounded: "full"
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    outlined: true
  },
};

