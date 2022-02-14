import React, {useEffect} from 'react';
import style from './Main.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {thunkDogImgAction} from "../../redux/actions/thunkDogActions";
import {addToLikedAction} from "../../redux/actions/addToLikedAction";


const MainDog = () => {
    const dispath = useDispatch()
    const dogImg = useSelector(state => state.dogImg)
    useEffect(() => {
        dispath(thunkDogImgAction())
    }, [])


    const addDogToLiked = () => { // при нажатии добовляется в избранные м показывается следующая картинка
        dispath(addToLikedAction(dogImg))
        dispath(thunkDogImgAction())
    }

    const imageHandler = () => {  // при нажатии imageHandler срабатывает обнавление страницы
        dispath(thunkDogImgAction())
    }



    const temp = {width: '18rem'}
    return (
        <div className={style.cart}>
            <div className="card" style={temp}>
                <img src={dogImg} alt='Dog'/>
                <table className='centra'>
                    <tr>
                        <td>
                            <button onClick={addDogToLiked} className="btn btn-info mx-4 btn-lg">👍</button>
                        </td>
                        <td>
                            <button onClick={imageHandler} className="btn btn-info mx-2 btn-lg">😶</button>
                        </td>
                        <td>
                            <button onClick={imageHandler} className="btn btn-info mx-4 btn-lg">👎</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default MainDog;