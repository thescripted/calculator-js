import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import * as math from "mathjs";
const App = () => {
  const [input, setInput] = useState("");

  const handleClear = () => {
    setInput("");
  };

  const handleEval = () => {
    setInput(math.evaluate);
  };

  const addToInput = (val) => {
    console.log(val);
    setInput(input + val);
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={input} />
        <div className="row">
          <Button handleClick={handleClear}>C</Button>
          <Button handleClick={addToInput}>&#177;</Button>
          <Button handleClick={addToInput}>&#37;</Button>
          <Button handleClick={addToInput}>&#247;</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>&#215;</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>&#8722;</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>&#43;</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={addToInput}>&#46;</Button>
          <Button handleClick={handleEval}>&#61;</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
