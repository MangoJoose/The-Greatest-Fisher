import React from "react";
import { Fish } from "../../../shared/types/fish";
import "../App.css";

type FishventoryDisplayProps = {
    fish_list: Fish[];
}

function FishventoryDisplay({fish_list}: FishventoryDisplayProps) {
    if (!fish_list || fish_list.length === 0) return null;
    return (
        <>
            {fish_list.map((f, index) => (
                <div key={`${f.id}-${index}`} className="fishventory-element">
                    <h2>{f.name}</h2>
                </div>
            ))}
        </>
        
    );
}

export default FishventoryDisplay;