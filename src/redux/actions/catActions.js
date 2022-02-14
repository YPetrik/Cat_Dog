import {CAT_IMG} from "../type/type";


export const catAction = (data) => {
    return {
        type: CAT_IMG,
        payload: data
    }
}