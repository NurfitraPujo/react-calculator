import React from "react";
import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type CalculatorKeyProps = {
  handler: (value: string | number) => unknown;
  value: string | number;
};

function CalculatorKey({ handler, value }: CalculatorKeyProps) {
  return (
    <Button
      p="3"
      colorScheme="gray"
      fontWeight="semibold"
      onClick={() => handler(value)}
      w="100%"
    >
      {value}
    </Button>
  );
}

export type { CalculatorKeyProps };
export { CalculatorKey };
