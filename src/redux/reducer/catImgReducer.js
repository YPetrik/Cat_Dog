import {CAT_IMG} from "../type/type";
import {initialState} from "../init/initialState";

export const catImgReducer = (state=initialState, action) => {
    const{payload, type} = action
    switch (type){
        case CAT_IMG:
            return payload
        default:
            return state
    }
}