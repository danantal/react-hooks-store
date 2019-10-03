import {useContext} from "react";
import {DispatchContext} from "../store/store";

export const useDispatch = () => useContext(DispatchContext);
