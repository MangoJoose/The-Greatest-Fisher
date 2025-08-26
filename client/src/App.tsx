import React from 'react';
import './App.css';
import Button from "./components/Button";

function App() {

  const testAlert = async () => {
    alert("Test Alert");
    try {
      const response = await fetch("/api/fish");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      console.log("Fetch Successful");
    } catch (error) {
      console.error("Error fetching:", error);
    }
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
