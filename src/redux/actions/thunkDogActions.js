import axios from 'axios'
import {dogActions} from "./dogActions";


export const thunkDogImgAction = () => async (dispatch) => {
    const image = await fetch('https://dog.ceo/api/breeds/image/random', {
        credentials: 'same-origin'
    })
    let temp = await image.json()
        const imageRaw = await fetch('https://dog.ceo/api/breeds/image/random', {
            credentials: 'same-origin'
        })
        temp = await imageRaw.json()

    dispatch(dogActions(temp.message))
}


// export const thunkDogImgAction = () => async (dispatch) => {
//     const image = await axios.get('https://dog.ceo/api/breeds/image/random')
//     console.log(image)
//
//     dispatch(dogActions(image.data[0].url))
//
// }