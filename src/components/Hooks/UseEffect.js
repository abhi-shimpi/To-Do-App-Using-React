import React from 'react';
import './Style.css';
import { useEffect,useState } from 'react';
// import { useEffect } from 'react';

const UseEffect = () => {
    const [myNum, setMyNum] = useState(0);
    useEffect(()=>{
        document.title = `Chats(${myNum})`
    })
    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div className="button2" onClick={() => setMyNum(myNum + 1)}>
                    <span></ span>
                    <span></ span>
                    <span></ span>
                    <span></ span>
                    INCR
                </div>
            </div>

        </>
    )
}

export default UseEffect;