

import './App.css';
import React,{Component} from 'react';



export default class App extends Component
{
  constructor()
  {
    super();
    this.state={data:[]};
  }
  
  render()
  {
    var arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];

    var res = 0;
    var c = 0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i] === 0)
        {
          c = 0
        }
        else{
          c = c + 1;
          if(c > res)
          {
            res = c
          }
        }
    }
    
    return(
      <div className="App">
      <h1>the maximum consecutive 1's in an array of 0's and 1's is : {res}</h1>
        
      </div>
    )
    
  }
}

