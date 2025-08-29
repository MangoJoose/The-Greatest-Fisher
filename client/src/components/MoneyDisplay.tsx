import React from "react";
import { useState } from "react";

type DisplayProps = {
    label: string;
}

function MoneyDisplay({ label }: DisplayProps) {
    return (
        <h1>Gold: {label}g</h1>
    )
};

export default MoneyDisplay;