import React, { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

const getStyledComponent = (btn) => {
  const className = {
    "=": "equals",
    "+": "opt",
    "-": "opt",
    "/": "opt",
    x: "opt",
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calculator, setCalculator } = useContext(CalculatorContext);

  // click comma
  const commaClick = () => {
    setCalculator({
      ...calculator,
      num: !calculator.num.toString().includes(".")
        ? calculator.num + value
        : calculator.num,
    });
  };

  //click AC
  const resetClick = () => {
    setCalculator({ sign: "", num: 0, res: 0 });
  };

  // click numbers
  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === "0" && calculator.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calculator.num + numberString);
    }

    setCalculator({
      ...calculator,
      num: numberValue,
    });
  };

  // click operation
  const signClick = () => {
    setCalculator({
      sign: value,
      res: !calculator.res && calculator.num ? calculator.num : calculator.res,
      num: 0,
    });
  };

  //click equals to
  const equalsClick = () => {
    if (calculator.res && calculator.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          x: (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalculator({
        res: math(calculator.res, calculator.num, calculator.sign),
        sign: "",
        num: 0,
      });
    }
  };

  // click percentage sign
  const percentClick = () => {
    setCalculator({
      num: calculator.num / 100,
      res: calculator.res / 100,
      sign: "",
    });
  };

  // click invert btn +-
  const invertClick = () => {
    setCalculator({
      num: calculator.num ? calculator.num * -1 : 0,
      res: calculator.res ? calculator.res * -1 : 0,
      sign: "",
    });
  };

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      AC: resetClick,
      "/": signClick,
      "+": signClick,
      x: signClick,
      "-": signClick,
      "=": equalsClick,
      DEL: resetClick,
      "%": percentClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyledComponent(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
