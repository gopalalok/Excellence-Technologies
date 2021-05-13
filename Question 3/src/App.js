

import './App.css';
import React,{Component} from 'react';

function DuplicateList(props) {  
  const myLists = props.duplicateNum;  
  const listItems = myLists.map((myList) =>  
    <h3>{myList}</h3> 
  );  
  return ( 
    <> 
          <h2>All repeated  Numbers</h2>  
          {listItems}  
    </>
  );  
}  

export default class App extends Component
{
  constructor()
  {
    super();
    this.state={data:[]};
  }
  
  render()
  {
    var arr = [0,1,2,3,4,4,5,6,7,7,8,9,10,11,12,12,13,14,15,15,16,17];
    var duplicateNum = [];
    for(var i=0;i<arr.length;i++)
    {
        for(var j = i+1; j<arr.length; j++)
        {
          if(arr[i] === arr[j])
          {
            duplicateNum=[...duplicateNum,arr[i]];
            break;
          }
        }
    }
    console.log(duplicateNum);
    return(
      <div className="App">
        <DuplicateList duplicateNum = {duplicateNum} />
      </div>
    )
    
  }
}

