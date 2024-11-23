import type { Meta, StoryObj } from '@storybook/react';
import { Gantt } from '../src';
import { Comparison } from './Comparison';

const meta = {
  title: 'Examples/Comparison',
  component: Gantt,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Gantt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Comparison />,
};
