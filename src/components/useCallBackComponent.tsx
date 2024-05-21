import React, { useCallback, useState } from 'react';

const UseCallBackComponent = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [unchange, setUnchange] = useState(0);

  // Define the callback function using useCallback with a dependency
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    console.log("Increment");
  }, [count1, setCount1]);

  const handleIncrement1 = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={handleIncrement} />
      <p>Count1: {count1}</p>
      <ChildComponent1 onIncrement1={handleIncrement1} />
    </div>
  );
};

const ChildComponent = (props:any) => {
  return (
    <button onClick={props.onIncrement}>Increment</button>
  );
};

const ChildComponent1 = (props:any) => {
    return (
      <button onClick={props.onIncrement1}>Increment1</button>
    );
  };

export default UseCallBackComponent;