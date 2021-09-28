// import './App.css';
import React, {useState} from 'react';
import {useEffect} from 'react';
import Graph from './Graph';


function Test() {
  //  fetching data from json-server
  const [data, setData] = useState([]);

  useEffect( async () => {
    const res = await fetch('http://localhost:5000/entries');
    setData(await res.json());
  }, []);

  return (
    <div>
      <Graph values={data.map((obj )=> obj.temp)}/>
    </div>
  );
}

export default Test;
