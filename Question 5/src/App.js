

import './App.css';
import React,{Component} from 'react';


export default class App extends Component
{
  
  
  render()
  {
    var obj = [
      {id : 4, name : "abc"},
      {id : 10, name : "ab2"},
      {id : 5, name : "abc3"},
      {id : 6, name : "abc5"}
    ]
    
    obj.sort((a, b) => (a.id > b.id) ? 1 : -1)
    console.log(obj);
    
    
    return(
      <div className="App">
      <h2>All Even Numbers</h2> 
          <table border="1" style={{marginLeft:"600px"}}>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          {
            obj.map((myList) =>
            <tr>
              <td>{myList.id}</td>
              <td>{myList.name}</td>
            </tr>
            )
          }
          </table>  
      </div>
    )
    
  }
}

