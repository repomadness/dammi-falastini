import type { Meta, StoryObj } from '@storybook/react-vite';

import Keffiyeh from './Keffiyeh';

const meta = {
  component: Keffiyeh,
  tags: ['autodocs'],
} satisfies Meta<typeof Keffiyeh>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scale: 1
  }
};

export const Transparent: Story = {
  args: {
    transparent: true
  }
};

export const CustomDesignColor: Story = {
  args: {
    designColor: 'red'
  }
};