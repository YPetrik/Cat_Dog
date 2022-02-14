import {ADD_TO_LIKED} from "../type/type";


export const addToLikedAction = (catOrDog) => {
    return {
        type: ADD_TO_LIKED,
        payload: catOrDog
    }
}