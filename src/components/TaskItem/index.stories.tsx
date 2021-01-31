import { Story, Meta } from "@storybook/react";

import TaskItem, { TaskItemProps } from ".";

export default {
  title: "Components/TaskItem",
  component: TaskItem,
} as Meta;

const Template: Story<TaskItemProps> = (args) => <TaskItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  task: {
    name: "10분 영어 공부",
    done: true,
  },
};
