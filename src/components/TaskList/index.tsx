import { FC } from "react";
import styled from "styled-components";
import TaskItem, { ITaskItem } from "../TaskItem";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export interface TaskListProps {
  tasks: Array<ITaskItem>;
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks?.map((task, index) => (
        <li key={index}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
