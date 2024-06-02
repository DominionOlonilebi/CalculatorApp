import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();
const CalculatorProvider = ({ children }) => {
  const [calculator, setCalculator] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const providerValue = {
    calculator,
    setCalculator,
  };

  return (
    <div>
      <CalculatorContext.Provider value={providerValue}>
        {children}
      </CalculatorContext.Provider>
    </div>
  );
};

export default CalculatorProvider;
