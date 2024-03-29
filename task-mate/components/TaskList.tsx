import Link from "next/link";
import React from "react";
import { Task, TaskDocument } from "../generated/graphql-frontend";
import TaskListItem from "./TaskListItem";

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <TaskListItem key={task.id} task={task} />;
      })}
    </ul>
  );
};

export default TaskList;
