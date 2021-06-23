import { CalcInititalStoreType } from "./CalculationStore";

type Action = { type: "ADD_VALUE"; payload: number } | { type: "CALCULATE" };

export default (state: CalcInititalStoreType, action: Action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return {
        ...state,
        calculationValues: state.calculationValues.concat(action.payload),
      };
  }
};
