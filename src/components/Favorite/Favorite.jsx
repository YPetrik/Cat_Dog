import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Favorite = () => {

    const dispatch = useDispatch()
    const catsDogs = useSelector((state) => state.liked)

    return (
        <div>
            {catsDogs && catsDogs.map((catOrDog) => {
                return (
                    <div>
                        {catOrDog && <img width="400" src={catOrDog} alt="..."/>}
                    </div>
                )
            })}
        </div>
    );
};

export default Favorite;