import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export interface ITaskItem {
  name: string;
  done: boolean;
}

export interface TaskItemProps {
  task: ITaskItem;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return (
    <Container>
      <input type="checkbox" name="done" defaultChecked={task.done} />
      <p>{task.name}</p>
    </Container>
  );
};

export default TaskItem;
