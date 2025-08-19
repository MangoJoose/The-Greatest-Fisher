import React from 'react';
import './App.css';
import Button from "./components/Button";

function App() {

  const testAlert = () => {
    alert("Test Alert");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button label="Fish" onClick={testAlert} />
      </header>
    </div>
  );
}

export default App;
