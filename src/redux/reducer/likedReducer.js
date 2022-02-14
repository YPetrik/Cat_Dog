import {initialState} from "../init/initialState";
import {ADD_TO_LIKED} from "../type/type";


export const likedReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case ADD_TO_LIKED:
            return [...state, payload]
        default:
            return state
    }
}