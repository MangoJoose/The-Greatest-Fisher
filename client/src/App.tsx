import React from 'react';
import './App.css';
import Button from "./components/Button";

function App() {

  const testAlert = async () => {
    try {
      const response = await fetch("/api/fish");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      console.log(response);
    } catch (err) {
      console.error("Error fetching:", err);
    }
  };

  const sellFish = async () => {
    try {
      const response = await fetch("api/sell");
      if (!response.ok) {
        throw new Error("Failed to fetch sell");
      }
      console.log(response);
    } catch (err) {
      console.error("Error sell fetching:", err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button label="Fish" onClick={testAlert} />
        <Button label="Sell All" onClick={sellFish} />
      </header>
    </div>
  );
}

export default App;
