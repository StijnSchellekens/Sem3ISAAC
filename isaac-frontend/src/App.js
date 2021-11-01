import React from 'react';
import NavBar from './components/NavBar';
import Routes from './components/helper/Routes';
function App() {
  return (
    <div data-testid="app-test1">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
