import {LibraryDto} from "../generated/Contracts";
import {GlobalState} from "./reducers";

export const setLibraries = (libraries: LibraryDto[]) => (
    {
        type: "SET_LIBRARIES",
        payload: libraries
    } as const
);

export const setCurrentLibrary = (libraryId: LibraryDto["id"]) => (
    {
        type: "SET_CURRENT_LIBRARY",
        payload: libraryId
    } as const
);


export type FunctionAction = (dispatch: React.Dispatch<ObjectAction>, state: GlobalState) => void;
export type ObjectAction = ReturnType<typeof setLibraries | typeof setCurrentLibrary>;
export type Action = ObjectAction | FunctionAction
