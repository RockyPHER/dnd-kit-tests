import { Task } from "../Task/Task";
import "./Column.css";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export const Column = ({ tasks }) => {
  return (
    <div className="column">
      {tasks.map((task) => (
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          <Task id={task.id} title={task.title} key={task.id} />
        </SortableContext>
      ))}
    </div>
  );
};
