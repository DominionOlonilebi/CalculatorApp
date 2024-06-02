import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

const Calculator = () => {
  const { calculator } = useContext(CalculatorContext);
  return (
    <div className="calculator" max={80} mode="single">
      {calculator.num ? calculator.num : calculator.res}
    </div>
  );
};

export default Calculator;
