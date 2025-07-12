import type { Meta, StoryObj } from '@storybook/react-vite';

import PopUpFlag from './PopUpFlag';

const meta = {
  component: PopUpFlag,
} satisfies Meta<typeof PopUpFlag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const Left: Story = {
  args: {
    position: 'left'
  }
};

export const Hover: Story = {
  args: {
    animationType: 'hoverSlide',
    position: 'left'
  }
};