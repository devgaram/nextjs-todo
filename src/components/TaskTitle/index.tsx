import { FC } from "react";
import styled from "styled-components";

const Title = styled.p`
  font-weight: bold;
  font-size: 32px;
`;

const TaskTitle: FC = ({ children }) => {
  return <Title>{children}</Title>;
};

export default TaskTitle;
