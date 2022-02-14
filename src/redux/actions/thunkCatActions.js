import {catAction} from "./catActions";

export const thunkCatImgAction = () => async (dispatch) => {
    const image = await fetch('https://api.thecatapi.com/v1/images/search?size=full', {
        credentials: 'same-origin'
    })
    let temp = await image.json()
    while(temp[0].height > 480 && temp[0].width > 640){
        const imageRaw = await fetch('https://api.thecatapi.com/v1/images/search?size=full', {
            credentials: 'same-origin'
        })
        temp = await imageRaw.json()
    }
    dispatch(catAction(temp[0].url))
}
