import type { Meta, StoryObj } from '@storybook/react-vite';

import SlideInFlag from './SlideInFlag';

const meta = {
  component: SlideInFlag,
  tags: ['autodocs'],
} satisfies Meta<typeof SlideInFlag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const HoverSlide: Story = {
  args: {
    animationType: 'hoverSlide'
  }
};
