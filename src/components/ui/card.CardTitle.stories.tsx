import type { Meta, StoryObj } from '@storybook/react';

import { CardTitle } from './card';

const meta = {
  component: CardTitle,
} satisfies Meta<typeof CardTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};