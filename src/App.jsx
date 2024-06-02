import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";
import CaseButton from "./components/CaseButton";
import Button from "./components/Button";
import CalculatorProvider from "./context/CalculatorContext";

const displayBtn = [
  ["AC", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "=", "DEL"],
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="parent">
        <h2 className="title">Calculator</h2>
        <CalculatorProvider>
          <Hero>
            <Calculator />
            <CaseButton>
              {displayBtn.flat().map((btn, index) => (
                <Button value={btn} key={index} />
              ))}
            </CaseButton>
          </Hero>
        </CalculatorProvider>
      </div>
    </>
  );
}

export default App;
