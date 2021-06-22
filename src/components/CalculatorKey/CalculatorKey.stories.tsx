import { Story } from "@storybook/react";
import React from "react";
import { CalculatorKey, CalculatorKeyProps } from "./CalculatorKey";

export default {
  component: CalculatorKey,
  title: "Component/CalculatorKey",
};

const Template: Story<CalculatorKeyProps> = (args) => (
  <CalculatorKey {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: "0",
};
