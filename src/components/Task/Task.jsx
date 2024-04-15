import { useSortable } from "@dnd-kit/sortable";
import "./Task.css";
import React from "react";
import { CSS } from "@dnd-kit/utilities";

export const Task = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="task"
    >
      <input type="checkbox" className="checkbox"></input>
      {title}
    </div>
  );
};
