import { useState } from "react";
import './Component2.css'

export const Component2 = () => {

    const [likesAmout, setlikesAmout] = useState(0);
    const [disLikesAmout, setdisLikesAmout] = useState(0);

    const changeLikes = () =>{
        setlikesAmout(likesAmout + 1)
    }

    const changeDisLikes = () =>{
        setdisLikesAmout(disLikesAmout + 1)
    }

    return (
        <div id="div-2">
            <div>
                <button className='button2' onClick={changeLikes}>like: {likesAmout}</button>
            </div>
            <div>
                <button className='button2' onClick={changeDisLikes}>Dislike: {disLikesAmout}</button>
            </div>
        </div>
    )
}