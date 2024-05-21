import React, { useMemo } from 'react';

const ChildComponent = (props:any) => {
    
    React.useEffect(() => {
        // console.log(props.name);
    },[])
    const data = [1,2,3,4,5,6,7,8,9,10]

    const processedData1 = (data: number[]) => {
        console.log(props.name)
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i];
          }
          return sum;
    }

    return (
        <div>
            <p>This is a child component. ProcessedData:{processedData1(data)}</p>
        </div>
    )
}

const UseMemoComponent: React.FC = () => {
    
    const data = [1,2,3,4,5,6,7,8,9,10]
    const [num, setNum] = React.useState(0)
    const processedData = useMemo(() => {
        // Perform some expensive computation on data
        // For example, let's assume we're calculating the sum of an array
        console.log("use Memo")
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          sum += data[i];
        }
        return sum;
      }, []);

    const processedData1 = (data: number[]) => {
        console.log("not use memo")
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i];
          }
          return sum;
    }

    const processedData2 = (data: number[]) => {
        console.log("use memo wrap")
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            // console.log(i);
            sum += data[i];
          }
          return sum;
    }

  return (
    <div>
      <p>Processed Data(useMemo): {processedData}</p>
      <p>Processed Data: {processedData1(data)}</p>
      {useMemo(() => {
        return (<p>Processed Data: {processedData2(data)}</p>)
      }, [])}
      {useMemo(() => <ChildComponent name="child2"/>,[])}
      <ChildComponent name="child1"/>
      <button onClick={() => setNum(num => num + 1)}>Click Me</button>
    </div>
  );
};

export default UseMemoComponent;