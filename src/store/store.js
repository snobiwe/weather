import { createStore } from "redux";

const store = createStore(reducer);

const reducer(state, action) => {
    switch(action.type) {
        case ACTION_1: return {
            value: action.value_1
        }   
        case ActioN_2: return {
            value: action.value_2
        }
        default: return state;
     }
        
}

export default store;