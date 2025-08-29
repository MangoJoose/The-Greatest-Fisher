import React from "react";
import { useState } from "react";

type DisplayProps = {
    label: string;
}

function MoneyDisplay({ label }: DisplayProps) {
    return (
        <h1>{label}</h1>
    )
};

export default MoneyDisplay;