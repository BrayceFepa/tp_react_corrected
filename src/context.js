import { createContext, useReducer } from "react";

export const countContext = createContext();

const initialCount = { count: 0 };

 const countReducer = (counter, action) => {
    switch (action.type) {
        case 'click':
            return { count: counter.count + 1 };
        default:
            return counter;
    }
}

export const CountProvider = (props) => {
    const [counter, dispatch] = useReducer(countReducer, initialCount);
    return (
        <countContext.Provider value={{ counter, dispatch }}>
            {props.children}
        </countContext.Provider>
    );
}