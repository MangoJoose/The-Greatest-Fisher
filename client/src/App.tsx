import React, { useState } from 'react';
import './App.css';
import Button from "./components/Button";
import MoneyDisplay from "./components/MoneyDisplay";
import FishDisplay from "./components/FishDisplay";

function App() {

  const [show, setShow] = useState(true);
  const [money_display, setMoneyDisplay] = useState("");
  const [is_running, setIsRunning] = useState(false);
  const [fish_display, setFishDisplay] = useState({
    name: "",
    description: "",
    rarity: 0,
    price: 0,
  });

  const goFish = async () => {
    try {
      if (is_running) return;
      setIsRunning(true);
      setShow((s) => !s);
      const response = await fetch("/api/fish");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to go fish");
      }
      console.log(data);
      setFishDisplay({
        name: data.name,
        description: data.description,
        rarity: data.rarity,
        price: data.price,
      });
      setShow((s) => !s);
      setIsRunning(false);
    } catch (err) {
      console.error("Error Fishing:", err);
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
      setMoneyDisplay(data.newTotal);
    } catch (err) {
      console.error("Error sell fetching:", err);
    }
  };

  function Left() {
    return <div className="section">Left</div>;
  }
  function Middle() {
    return (
      <div className="section">
        <MoneyDisplay label={money_display}/>
        <Button label="Fish" onClick={goFish} is_running={is_running}/>
        <Button label="Sell All" onClick={sellFish} is_running={false}/>
        <FishDisplay name={fish_display.name} description={fish_display.description} rarity={fish_display.rarity} price={fish_display.price} visible={show}/>
      </div>
    );
  }
  function Right() {
    return <div className="section">Right</div>;
  }

  return (
    <div className="container">
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

export default App;
