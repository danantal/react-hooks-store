import React, {FunctionComponent, useReducer, createContext} from "react";
import {GlobalState, globalStateReducer, initialState} from "./reducers";
import {Action} from "./actions";

export const StoreContext = createContext<GlobalState>(initialState);
export const DispatchContext = createContext<React.Dispatch<Action>>(() => {});

export const StoreProvider: FunctionComponent = ({children}) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);

    const enhancedDispatch = (action: Action) => {
        if (typeof action === "function") {
            return action(dispatch, state);
        }

        return dispatch(action);
    };

    return (
        <StoreContext.Provider value={state}>
            <DispatchContext.Provider value={enhancedDispatch}>
                {children}
            </DispatchContext.Provider>
        </StoreContext.Provider>
    );
};
