import React, {useEffect} from 'react';
import style from './Main.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {thunkCatImgAction} from "../../redux/actions/thunkCatActions";
import {likedReducer} from "../../redux/reducer/likedReducer";
import {addToLikedAction} from "../../redux/actions/addToLikedAction";

const MainCat = () => {
    const dispath = useDispatch()
    const catImg = useSelector(state => state.catImg)
    useEffect(() => {
        dispath(thunkCatImgAction())
    }, [])

const addCatToLiked = () => {
    dispath(addToLikedAction(catImg))
    dispath(thunkCatImgAction())
}


   const  imageHandler = () => {
       dispath(thunkCatImgAction())
   }



   const temp = {width: '18rem'}
    return (
           <div className={style.cart}>
               <div className="card" style={temp}>
                 <img src={catImg} alt={'Cats'}/>
                   <body>
                   <table className='centra'>
                       <tr>
                           <td>
                               <button onClick={addCatToLiked }  className="btn btn-info mx-4 btn-lg">👍</button>
                           </td>
                           <td>
                               <button onClick={imageHandler}  className="btn btn-info mx-2 btn-lg">😶</button>
                           </td>
                           <td>
                               <button onClick={imageHandler}  className="btn btn-info mx-4 btn-lg">👎</button>
                           </td>
                       </tr>
                   </table>
                   </body>
               </div>
           </div>
    );
};

export default MainCat;