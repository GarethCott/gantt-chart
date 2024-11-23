import React, { useCallback, useState } from "react";
import { Gantt, OnChangeTasks, Task, TaskOrEmpty } from "../src";
import { initTasks, onAddTask, onEditTask } from "./helper";
import { Button } from "../src/components/ui/button";
import "../dist/style.css";

export const Comparison: React.FC = props => {
  const [tasks, setTasks] = useState<readonly TaskOrEmpty[]>(() => {
    const firstLevelTasks = initTasks();
    const secondLevelTasks = firstLevelTasks.map(
      (task) => ({
        ...task,
        comparisonLevel: 2
      } as TaskOrEmpty));
    return [...firstLevelTasks, ...secondLevelTasks];
  });

  const handleTaskChange = useCallback<OnChangeTasks>((updatedTasks) => {
    setTasks(updatedTasks);
  }, []);

  const handleAddTask = useCallback(() => {
    setTasks(onAddTask(tasks));
  }, [tasks]);

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <Button variant="default" onClick={handleAddTask}>
          Add Task
        </Button>
        <Button variant="outline" onClick={() => setTasks(initTasks())}>
          Reset Tasks
        </Button>
      </div>
      
      <div style={{ height: "400px" }}>
        <Gantt
          tasks={tasks}
          onChangeTasks={handleTaskChange}
          viewMode={"Day"}
          columnWidth={60}
          listCellWidth={"155px"}
          ganttHeight={300}
        />
      </div>
    </div>
  );
};
