import React from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
    is_running: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, is_running }) => {
    return (
        <button
        onClick = {onClick}
        style = {{ padding: "8px 16px", backgroundColor: "blue", color: "white", borderRadius: "6px" }}
        disabled = {is_running}
        >
            {label}
        </button>
    );
};

export default Button;