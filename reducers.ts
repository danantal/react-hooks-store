import {LibraryDto} from "../generated/Contracts";
import {ObjectAction} from "./actions";

export interface GlobalState {
    libraries: LibraryDto[];
    currentLibraryId?: string;
}

export const initialState: GlobalState = {
    libraries: []
};

export const globalStateReducer = (state: GlobalState, action: ObjectAction): GlobalState => {
    switch (action.type) {
        case "SET_LIBRARIES":
            return {
                ...state,
                libraries: action.payload
            };
        case "SET_CURRENT_LIBRARY":
            return {
                ...state,
                currentLibraryId: action.payload
            };
        default:
            return state;
    }
};
