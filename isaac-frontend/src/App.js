// import './App.css';
import React from 'react';
// import Dashboard from './components/Dashboard';
import DashboardGraphs from './components/DashboardGraphs';
// import NavBar from './components/NavBar';

// import Dashboard from './components/Dashboard';
// import Heatmap from './components/Heatmap';

// import {
//   Switch,
//   Route,
// } from 'react-router-dom';

function App() {
  // return (
  //   <div>
  //     <NavBar />
  //     <Switch>
  //       <Route path="/heatmap">
  //         <Heatmap />
  //       </Route>
  //       <Route path="/">
  //         <Dashboard />
  //       </Route>
  //     </Switch>
  //   </div>
  // );
  return (
    <DashboardGraphs/>
  );
}

export default App;
