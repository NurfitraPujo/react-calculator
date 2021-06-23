import { createContext, ReactNode } from "react";

type CalcInititalStoreType = {
  calculationValues: (string | number)[];
  currentDisplayValue: string | number;
};

const calcInitialStore = {
  calculationValues: [],
  currrentDisplayValue: 0,
};

const calculationStore = createContext(calcInitialStore);

const CalculationProvider = ({ children }: { children: ReactNode }) => {};

export type { CalcInititalStoreType };
