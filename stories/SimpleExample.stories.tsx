import type { Meta, StoryObj } from '@storybook/react';
import { Gantt } from '../src';
import React, { useState } from 'react';
import { Task } from '../src/types/public-types';

const meta = {
  title: 'Examples/Simple Example',
  component: Gantt,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Gantt>;

export default meta;
type Story = StoryObj<typeof meta>;

const SimpleGantt: React.FC<{ viewMode?: string }> = ({ viewMode = "Day" }) => {
  const [tasks] = useState<Task[]>([
    {
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 5),
      name: 'Development Phase 1',
      id: '1',
      progress: 45,
      type: 'task',
      styles: { backgroundColor: '#ff4444', progressColor: '#ff8888' },
    },
    {
      start: new Date(2024, 0, 3),
      end: new Date(2024, 0, 7),
      name: 'Development Phase 2',
      id: '2',
      progress: 70,
      type: 'task',
      dependencies: ['1'],
      styles: { backgroundColor: '#44ff44', progressColor: '#88ff88' },
    },
    {
      start: new Date(2024, 0, 6),
      end: new Date(2024, 0, 10),
      name: 'Testing Phase',
      id: '3',
      progress: 30,
      type: 'task',
      dependencies: ['2'],
      styles: { backgroundColor: '#4444ff', progressColor: '#8888ff' },
    }
  ]);

  return (
    <div style={{ height: '400px', width: '1000px', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Project Timeline</h2>
      <Gantt
        tasks={tasks}
        viewMode={viewMode}
        listCellWidth=""
        columnWidth={80}
      />
    </div>
  );
};

// Different view modes
export const DayView: Story = {
  render: () => <SimpleGantt viewMode="Day" />,
};

export const WeekView: Story = {
  render: () => <SimpleGantt viewMode="Week" />,
};

export const MonthView: Story = {
  render: () => <SimpleGantt viewMode="Month" />,
};
