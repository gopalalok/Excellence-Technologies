

import './App.css';
import React,{Component} from 'react';

function NameList(props) {  
  const myLists = props.evenarr;  
  const listItems = myLists.map((myList) =>  
    <h3>{myList}</h3> 
  );  
  return ( 
    <> 
          <h2>All Even Numbers</h2>  
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
    var arr = [55,87,22,64,97,24,98,65,44];
    var evenarr = [];
    var oddarr = [];
    for(var i=0;i<arr.length;i++)
    {
        arr[i]%2===0?evenarr=[...evenarr,arr[i]]:oddarr=[...evenarr,arr[i]];
    }
    
    return(
      <div className="App">
        <NameList evenarr = {evenarr} />
      </div>
    )
    
  }
}

