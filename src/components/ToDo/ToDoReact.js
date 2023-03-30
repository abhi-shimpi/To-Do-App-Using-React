import React, { useState,useEffect} from 'react';
import './Style.css';

const getLocalStorage = () => {
    const list = localStorage.getItem("myToDoData");
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
}
const ToDoReact = () => {
    const [inputData,setInputData] = useState("");
    // const [items, setItems] = useState([]); // So here what happening is
    // that useEffect is changing data whenever any change in DOM detected but when change is 
    // happening new value of item is set as [] empty array bt useState that is why 
    // I am getting empty object after page refresh 
    const [items, setItems] = useState(getLocalStorage());
    const [toggle , settoggle] = useState(false);

    const addItem = () =>{
        const dataWithId = 
            {
                id:new Date().getTime().toString(),
                name:inputData
            };
        if(!inputData){
            alert("Fill the data");
        }else{
            setItems([...items, dataWithId]);
            // We always have to pass new value in same format which was inititally 
            // defined , current state will not get updated in prvious format automatically
            setInputData("")
        }
    }

    const editItem = (index) =>{
        const updatedList = items.find((ele)=>{
            return ele.id === index
        })
        settoggle(true);
        setInputData(updatedList.name);
        
    }
    const deleteItem = (index) =>{
        const updatedItems = items.filter((currEle)=>{
            return currEle.id !== index;
        })
        setItems(updatedItems);
    }

    useEffect(()=>{
        localStorage.setItem("myToDoData",JSON.stringify(items));
    },[items])
  return (
      <div className= "main-div" >
          <div className="child-div">
              <figure>
                  <img src="./images/todo.svg" alt="todologo" />
                  <figcaption>Add Your List Here </figcaption>
              </figure>
              <div className='addItems'>
                  <input
                      type="text"
                      placeholder="🦾Add your to do here"
                      value={inputData}
                      onChange={(event) => { setInputData(event.target.value)}}
                      ></input>
                    { toggle ? <i className="far fa-edit add-btn" onClick={() => editItem(currEle.id)}></i> : <i className="fa fa-plus add-btn" onClick={addItem}></i>}              </div>
              <div className='showItems'>
                {
                    items.map((currEle,index)=>{
                        return(
                            <div className='eachItem' key={index}>
                                <h4>{currEle.name}</h4>
                                <div className='todo-btn'>
                                    <i className="far fa-edit add-btn" onClick={()=>editItem(currEle.id)}></i>
                                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(currEle.id)}></i>
                                </div>
                            </div>
                        )
                    })
                }
              </div>
              <div className="showItems">
                  <button className='btn effect04' data-sm-link-text="Remove all">
                      <span>CHECK LIST</span>
                  </button>
              </div>
            </div>
            
        </div>


  )
}

export default ToDoReact