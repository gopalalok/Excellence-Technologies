import React,{useState} from "react";
import './App.css';
import ToDoList from "./ToDoList";
const App = ()=>{

  const [inputList,setInputList] = useState("");
  const [Items,setItems] = useState([]);

  const itemEvent = (e)=>{
    setInputList(e.target.value);
  };

  const listOfItems = ()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList];
    });
    setInputList("");
  }

  const deleteItem = (id)=>{
    setItems((olditems)=>{
      return olditems.filter((element,inx)=>{
        return inx !== id;
      });
    });
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" value={inputList} placeholder="Add a Items" onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>
        </div>
        <ol>
          {
            Items.map((item,i)=>{
                return <ToDoList key={i} id={i} text={item} onSelect={deleteItem}/>
            })
          }
          
        </ol>
      </div>
    </>
  );
};

export default App;