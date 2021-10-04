import React from 'react';
import NavBar from './components/NavBar';
import Routes from './components/helper/Routes';
import DashboardGraphs from './components/DashboardGraphs';
function App() {
  return (
    <div>
      <NavBar />
      <Routes />
      <DashboardGraphs/>
    </div>
  );
}

export default App;
