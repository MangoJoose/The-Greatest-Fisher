import React, { useState } from 'react';
import './App.css';
import Button from "./components/Button";
import MoneyDisplay from './components/MoneyDisplay';

function App() {

  const [money_display, setMoneyDisplay] = useState("Gold: ");

  const testAlert = async () => {
    try {
      const response = await fetch("/api/fish");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      console.log(data);
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
      const data = await response.json();
      console.log("New Money: ", data.newTotal);
      setMoneyDisplay(`Gold: ${data.newTotal}`);
    } catch (err) {
      console.error("Error sell fetching:", err);
    }
  };

  const updateMoney = async () => {
    try {

    } catch (err) {
      console.error("Error updating money:", err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <MoneyDisplay label={money_display}/>
        <Button label="Fish" onClick={testAlert} />
        <Button label="Sell All" onClick={sellFish} />
      </header>
    </div>
  );
}

export default App;
