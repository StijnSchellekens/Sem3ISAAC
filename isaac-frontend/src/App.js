import './App.css';
import React from 'react';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/entries');
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      s
    </div>
  );
}

export default App;
