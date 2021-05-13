import { useEffect, useState } from "react";
import './App.css';
import { fetchData } from './api';

function App() {
  const [ data, setData ] = useState("");

  useEffect(() => {
      const fetchApi = async() => {
        setData(await fetchData());
      }
      fetchApi();
  }, [])
  console.log(data)
  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
