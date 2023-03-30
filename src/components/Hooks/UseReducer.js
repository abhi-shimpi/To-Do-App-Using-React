import React from 'react';
import './Style.css';
import { useReducer } from 'react';

const UseState = () => {
    // const [myNum, setMyNum] = useState(0);
    const reducer = (state,action) =>{
        if(action.type === "INCR"){
            console.log(state);
            state = state + 1;
        }
        if (action.type === "DECR") {
            console.log(state);
            state = state - 1;
        }
        return state;
    }

    const [state,dispatch] = useReducer(reducer,0);
    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => dispatch({type : "INCR"})}>
                    <span></ span>
                    <span></ span>
                    <span></ span>
                    <span></ span>
                    INCR
                </div>
                <div className="button2" onClick={() => state > 0 ? dispatch({ type: "DECR" }) : 0}>
                    <span></ span>
                    <span></ span>
                    <span></ span>
                    <span></ span>
                    DECR
                </div>
            </div>

        </>
    )
}

export default UseState