
import './App.css';
import React from 'react';
import {useEffect} from 'react';
import Graph from './components/Graph';


function App() {
  //  fetching data from json-server
  let data = [];
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/entries');
      data = await res.json();
    };
    fetchData();
    fillTempArray();
  }, []);

  console.log(data);
  const tempArrayWeek =[];
  const fillTempArray = () => {
    data.map((obj) =>{
      tempArrayWeek.push(obj.temp);
    });
  };

  return (
    <div>
      <Graph values={tempArrayWeek}/>
      <p>dasd</p>
    </div>
  );
}

export default App;


// import './App.css';
// import React, {useState} from 'react';
// import {useEffect} from 'react';
// // import Graph from './components/Graph';


// function App() {
//   //  fetching data from json-server
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch('http://localhost:5000/entries%27');
//       const sss = await res.json();
//       console.log(sss);
//       setData(sss);
//     };
//     fetchData();
//   }, []);
//   if (!data) return (<div>Laoding..</div>);
//   return (
//     <div>
//       {/* <Graph values={data.map((obj) => obj.temperature)}/>*/}
//       <p>{data}</p>
//     </div>
//   );
// };

// export default App;
