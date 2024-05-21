import { useState } from "react";

export interface Counter {
    count: number;
    incrementCount: () => void;
    decrementCount: () => void;
}

const useCounter = (initialValue: number = 0, step: number = 0) : Counter => {
    const [ count, setCount ] = useState<number>(initialValue);

    const incrementCount = () => {
        setCount( count + step);
    }

    const decrementCount = () => {
        setCount( count - step);
    }

    return { count, incrementCount, decrementCount };
}

export default useCounter;