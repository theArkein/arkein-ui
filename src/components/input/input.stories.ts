import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
  title: 'UI Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "input",
    placeholder: "input text here ...",
    label: "Input Element",
  },
};

export const Lined: Story = {
  args: {
   ...Default.args,
   label: "",
   lined: true
  },
};

export const Invalid: Story = {
  args: {
   ...Default.args,
   invalid: true,
   error: "Invalid input field"
  },
};