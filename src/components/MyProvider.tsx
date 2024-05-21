import { Component, createContext, useState } from "react";
import { ReactNode } from "react";

interface MyProviderProps {
    children: ReactNode
}

export interface ContextType {
    data: string
    updateData: (data: string) => void
}

export const MyContext = createContext<ContextType|undefined>(undefined);

const MyProvider : React.FC<MyProviderProps> = ({children}) => {
    const [ data, setData ] = useState<string>("Default Data");

    const updateData = (data: string) => {
        setData(data);
    }

    const contextValue: ContextType = {
        data: data,
        updateData: updateData
    }
    return (    
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;