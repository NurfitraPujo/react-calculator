import { Story } from "@storybook/react";
import React from "react";
import { CalculatorKey, CalculatorKeyProps } from "./CalculatorKey";

export default {
  component: CalculatorKey,
  title: "Component/CalculatorKey",
  decorators: [
    (Story: Function) => (
      <div style={{ width: 100 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<CalculatorKeyProps> = (args) => (
  <CalculatorKey {...args} />
);

export const Default = Template.bind({});

Default.args = {
  value: "0",
  handler: () => console.log(Default.args?.value),
};

Default.argTypes = {
  handler: {
    action: Default.args.value,
  },
};
