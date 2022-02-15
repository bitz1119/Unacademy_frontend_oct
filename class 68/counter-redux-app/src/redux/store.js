import { createStore } from "redux";
import reducer from "./reducer";


let myStore = createStore(reducer);

export default myStore;
