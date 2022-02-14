import {initialState} from "../init/initialState";
import {DOG_IMG} from "../type/type";


export const dogImgReducer = (state = initialState, action ) => {
    const {payload, type} = action
    switch (type){
        case DOG_IMG:
            return payload
        default:
            return state
    }
}