import React from "react";
import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

type CalculatorKeyProps = {
  handler: Function;
  label: ReactNode;
};

function CalculatorKey({ handler, label }: CalculatorKeyProps) {
  return (
    <Box p="3" color="orange" bgColor="white">
      {label}
    </Box>
  );
}

export type { CalculatorKeyProps };
export { CalculatorKey };
