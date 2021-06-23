import React from "react";
import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type CalculatorKeyProps = {
  handler: () => unknown;
  label: ReactNode;
};

function CalculatorKey({ handler, label }: CalculatorKeyProps) {
  return (
    <Button
      p="3"
      colorScheme="gray"
      fontWeight="semibold"
      onClick={handler}
      w="100%"
    >
      {label}
    </Button>
  );
}

export type { CalculatorKeyProps };
export { CalculatorKey };
