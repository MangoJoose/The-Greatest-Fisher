import React from "react";
import "../App.css";

type FishProps = {
    name: string;
    description: string;
    rarity: number;
    price: number;
    visible: boolean;
}

function FishDisplay({ name, description, rarity, price, visible }: FishProps) {

    let rar = "";

    if (rarity == 1) {
        rar = "Common";
    } else if (rarity == 2) {
        rar = "Uncommon";
    } else if (rarity == 3) {
        rar = "Rare";
    } else if (rarity == 4) {
        rar = "Very Rare";
    }

    return (
        <div
            className="fish-display"
            style={{ visibility: visible ? "visible" : "hidden" }}
        >
            <h2>You caught a {name}!</h2>
            <h3>{rar}</h3>
            <p>Sell Price: {price}g</p>
        </div>
        
    );
};

export default FishDisplay;