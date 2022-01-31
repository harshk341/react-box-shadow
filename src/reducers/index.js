import { combineReducers } from "redux";
import LengthReducer from "./LengthReducer";
import ColorReducer from "./ColorReducer";

export default combineReducers({
    length: LengthReducer,
    color: ColorReducer
});