import React, { useState, useCallback } from 'react';

export default function ExampleComponent() {
  const [count, setCount] = useState(5);

  // Without useCallback
  const incrementCountWithoutCallback = () => {
    setCount(count => count + 1);
    console.log(count);
  };

  // With useCallback
  const incrementCountWithCallback = useCallback(() => {
    console.log(count);
    setCount(count => count + 1);
    
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCountWithoutCallback}>WithOutCallback</button>
      <button onClick={incrementCountWithCallback}>WithCallBack</button>
    </div>
  );
};

// const ChildComponentWithoutCallback = ({ onClick:any }) => {
//   console.log('ChildComponentWithoutCallback rendered');
//   return <button onClick={onClick}>Increment Count (Without useCallback)</button>;
// };

// const ChildComponentWithCallback = React.memo(({ onClick:any }) => {
//   console.log('ChildComponentWithCallback rendered');
//   return <button onClick={onClick}>Increment Count (With useCallback)</button>;
// });

// export default ExampleComponent;