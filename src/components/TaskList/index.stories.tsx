import { Story, Meta } from "@storybook/react";

import TaskList, { TaskListProps } from ".";

export default {
  title: "Components/TaskList",
  component: TaskList,
} as Meta;

const Template: Story<TaskListProps> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});

Default.args = {
  tasks: [
    {
      name: "10분 영어 공부",
      done: true,
    },
    {
      name: "1시간 독서하기",
      done: false,
    },
    {
      name: "30분 명상하기",
      done: true,
    },
  ],
};
